'use client'

import {usePathname, useRouter} from "next/navigation";
import React from "react";
import {HEADLINE_MEDIUM, HEADLINE_SMALL} from "@/UI/Tokens/Typography";
import styles from "@/app/parks/[parkId]/styles.module.css";
import SelectMenu from "@/UI/Components/Select/Select";
import Button from "@/UI/Components/Button";
import {ParkDataErrors, refreshParkData} from "@/Helpers/Networking/Parks";
import Icon from "@/UI/Components/Icon";
import {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";
import {ReLineChart} from "@/UI/Charts/Line/ReLineChart";
import {ReComposedChart} from "@/UI/Charts/Composed/ReComposedChart";
import {ReRadialChart} from "@/UI/Charts/Radial/ReRadialChart";
import {ReBarChart} from "@/UI/Charts/Bar/ReBarChart";
import TimePicker from "@/app/parks/[parkId]/DatePickerDialog";
import {PageParams} from "@/app/parks/[parkId]/page";
import Card from "@/UI/Components/Card";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import * as Select from "@radix-ui/react-select";
import {SelectItemProps} from "@radix-ui/react-select";
import {Park} from "@/UI/Components/Parks";
import {Datapoint, Occurrences} from "@/app/api/parks/[parkId]/[interval]/ParkDataTypes";
import Link from "next/link";
import {preDefinedKeys} from "@/app/parks/[parkId]/Separator";
import dayjs from "dayjs";

export type ClientParams = {
    parkInfo: Park,
    parkData: {data: Datapoint[], occurrences: Occurrences} | ParkDataErrors
}

const preDefinedOptions: { [key in preDefinedKeys]: string } = {
    '1h': 'Past Hour',
    '4h': 'Past 4 Hours',
    '24h': 'Past day',
    '7d': 'Past 7 days',
    '30d': 'Past 30 days',
}

const customRangeOptions = {
    'custom': 'Custom Range'
}

function isValidDateOption(option: string): boolean {
    if (!option)
        return false
    if (option in preDefinedOptions)
        return true

    const splitted = option.split('_');
    if (splitted.length !== 2)
        return false;

    return true;
}

function Container({title, children, classes}: {
    title?: string,
    classes?: string | undefined,
    children: React.ReactNode
}) {
    return (
        <Card classes={classes ?? styles.wrapper_no_title}>
            {title && <h1 className={ConcatClasses(HEADLINE_SMALL, styles.title)}>
                {title}
            </h1>}
            {children}
        </Card>
    )
}

const weatherMap = {
    0: 'Sunny',
    1: 'Raining',
    2: 'Partly cloudy',
    3: 'Cloudy',
}


export function ParkIdClient({params: {parkId}, searchParams: {time}, parkInfo, parkData}: PageParams & ClientParams) {
    const path = usePathname();
    const router = useRouter();
    const [showDialog, setShowDialog] = React.useState(false);
    const [timeA, setTimeRaw] = React.useState(isValidDateOption(time) ? time : '24h');
    const occurrences = typeof parkData === 'object' && 'occurrences' in parkData ?
        parkData.occurrences.reduce((a, {count}) => a + count, 0) : 0

    const setTime = (value: string) => {
        setTimeRaw(value);
        router.push(`${path}?time=${value}`);
    }

    return (
        <>
            <Container classes={styles.filter}>
                <SelectMenu triggerStyles={styles.border} options={[
                    Object.entries(preDefinedOptions),
                    Object.entries(customRangeOptions)
                ]} value={timeA in preDefinedOptions ? timeA : 'custom'} onValueChange={(newValue) => {
                    if (newValue === 'custom') {
                        console.log('datepicker');
                        setShowDialog(true);
                        return;
                    }

                    if (isValidDateOption(newValue))
                        setTime(newValue);

                }}
                            valueFormatter={(value) => timeA in preDefinedOptions ? preDefinedOptions[timeA as keyof typeof preDefinedOptions] : 'Custom'}/>
                <Button buttonType={'none'} onClick={() => {
                    refreshParkData();
                }}>
                    <Icon icon={'RefreshCw'} fill={'transparent'}/>
                    <VisuallyHiddenClient>Refresh park data</VisuallyHiddenClient>
                </Button>
            </Container>

            {parkData === ParkDataErrors.noData || parkData === ParkDataErrors.badInterval ?
                <ParkDataError error={parkData as ParkDataErrors}/> :
                <div>
                    <div>
                        <h2 className={HEADLINE_MEDIUM}>Weather</h2>
                        <div className={styles.container}>
                            <Container classes={styles.wrapper} title={'Conditions'}>
                                <ReLineChart classes={styles.chart} formatter={(name, value) => name === 'temperature' ?
                                    <>Temperature: {value} <span aria-hidden={"true"}>(°C)</span><VisuallyHiddenClient>celsius</VisuallyHiddenClient></> :
                                    <>Wind speed: {value} <span aria-hidden={"true"}>(m/s)</span> <VisuallyHiddenClient>meters
                                        per second</VisuallyHiddenClient></>}
                                    data={parkData.data}
                                             leftAxisOptions={{dataKeys: ['temperature']}}
                                             rightAxisOptions={{dataKeys: ['windSpeed']}}
                                             xAxisOptions={{dataKey: 'time', tickFormatter: (v) => dayjs(v).format('DD-HH:mm'), interval: Math.floor(parkData.data.length/5)}}
                                             legendFormatter={(v) => v === 'temperature' ? 'Temperature' : 'Wind speed'}
                                             labelFormatter={(v) => new Date(v).toLocaleString()}
                                />
                            </Container>
                            <Container classes={styles.wrapper} title={'Distribution'}>
                                <ReBarChart classes={styles.chart} formatter={(_, value) =>
                                    <>{value} occurrenes ({((value/occurrences)*100).toFixed(1)} <span aria-hidden={"true"}>%)</span><VisuallyHiddenClient>percent</VisuallyHiddenClient></>}
                                            data={parkData.occurrences}
                                            xAxisOptions={{dataKey: 'weather', tickFormatter: (v) => weatherMap[v as keyof typeof weatherMap]}}
                                            leftAxisOptions={{dataKeys: ['count']}}
                                            legendFormatter={(v) => 'Count'}
                                            labelFormatter={(v) => weatherMap[v as keyof typeof weatherMap]}
                                />
                            </Container>
                        </div>
                    </div>

                    {/*<Container classes={styles.wrapper} title={'Distribution Radial Bar'}>*/}
                    {/*    <ReRadialChart classes={styles.chart}/>*/}
                    {/*</Container>*/}
                    <div>
                        <h2 className={HEADLINE_MEDIUM}>Power</h2>
                        <div className={styles.container}>
                            <Container classes={styles.wrapper} title={'Predictions'}>
                                <ReComposedChart classes={styles.chart} formatter={(name, value) => name === 'power' ?
                                    <>Power: {value} <span aria-hidden={"true"}>(KwH)</span><VisuallyHiddenClient>kilowatt hours</VisuallyHiddenClient></> :
                                    <>Sky: {value} <span aria-hidden={"true"}>(%)</span><VisuallyHiddenClient>percent</VisuallyHiddenClient></>}
                                                 xAxisOptions={{dataKey: 'time', tickFormatter: (v) => dayjs(v).format('DD-HH:mm'), interval: Math.floor(parkData.data.length/5)}}
                                                 leftAxisOptions={{
                                                     dataKeys: ['power'],
                                                 }}
                                                 rightAxisOptions={{
                                                     dataKeys: ['skyPercent'],
                                                 }}
                                                 data={parkData.data}
                                                 legendFormatter={(v) => v === 'power' ? 'Power' : 'Sky Percent'}
                                                 labelFormatter={(v) => new Date(v).toLocaleString()}
                                />
                            </Container>
                        </div>
                    </div>
                </div>
            }

            {process.env.NODE_ENV !== 'production' && false && <pre>
                    {JSON.stringify(parkData, null, 2)}
                </pre>}

            {showDialog && <TimePicker onClose={() => setShowDialog(false)} onSubmit={(start, end) => {
                setTime(`${start}_${end}`);
                setShowDialog(false);
            }}/>}
        </>

    )
}

function ParkDataError({error}: { error: ParkDataErrors }) {
    const headerText = error === ParkDataErrors.noData ? 'No Data' : 'Bad Interval';
    const bodyText: React.ReactNode = error === ParkDataErrors.noData ?
        'there is no data in this selected interval.' :
        'the chosen time interval is not allowed.';

    return (
        <div className={styles.error_container}>
            <h2 className={HEADLINE_MEDIUM}>{headerText}</h2>
            <p className={styles.error_container}>
                {bodyText}
                <Link href={'/'} className={ConcatClasses(styles.go_back, styles.error_link)}>Go back home</Link>
            </p>
        </div>
    )
}

// eslint-disable-next-line react/display-name
const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(({
                                                                          children,
                                                                          className,
                                                                          ...props
                                                                      }, forwardedRef) => {
    return (
        <Select.Item className={ConcatClasses('SelectItem', className)} {...props} ref={forwardedRef}>
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="SelectItemIndicator">
                <Icon icon={"Check"}/>
            </Select.ItemIndicator>
        </Select.Item>
    );
});
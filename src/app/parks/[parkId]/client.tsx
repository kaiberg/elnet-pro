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
import {PageParams, preDefinedKeys} from "@/app/parks/[parkId]/page";
import Card from "@/UI/Components/Card";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import * as Select from "@radix-ui/react-select";
import {SelectItemProps} from "@radix-ui/react-select";
import {Park} from "@/UI/Components/Parks";
import {Datapoint} from "@/app/api/parks/[parkId]/[interval]/ParkDataTypes";
import Link from "next/link";

export type ClientParams = {
    parkInfo: Park,
    parkData: Datapoint[] | ParkDataErrors
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
        <Card classes={classes}>
            {title && <h1 className={HEADLINE_SMALL}>
                {title}
            </h1>}
            {children}
        </Card>
    )
}


export function ParkIdClient({params: {parkId}, searchParams: {time}, parkInfo, parkData}: PageParams & ClientParams) {
    const path = usePathname();
    const router = useRouter();
    const [showDialog, setShowDialog] = React.useState(false);
    const [timeA, setTimeRaw] = React.useState(isValidDateOption(time) ? time : '24h');

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

                    }} valueFormatter={(value) => timeA in preDefinedOptions ? preDefinedOptions[timeA as keyof typeof preDefinedOptions] : 'Custom'}/>
                    <Button buttonType={'none'} onClick={() => {
                        refreshParkData();
                    }}>
                        <Icon icon={'RefreshCw'} fill={'transparent'}/>
                        <VisuallyHiddenClient>Refresh park data</VisuallyHiddenClient>
                    </Button>
                </Container>

            {parkData === ParkDataErrors.noData || parkData === ParkDataErrors.badInterval ?
                <ParkDataError error={parkData as ParkDataErrors}/>
                :
                <div className={styles.container}>
                    <Container classes={styles.wrapper} title={'santiago'}>
                        <ReLineChart classes={styles.chart}/>
                    </Container>
                    <Container classes={styles.wrapper} title={'temparature'}>
                        <ReComposedChart classes={styles.chart}/>
                    </Container>
                    <Container classes={styles.wrapper} title={'sky% change'}>
                        <ReRadialChart classes={styles.chart}/>
                    </Container>
                    <Container classes={styles.wrapper} title={'weather catalog'}>
                        <ReBarChart classes={styles.chart}/>
                    </Container>
                    <Container classes={styles.wrapper} title={'wind speed'}>
                        <ReLineChart classes={styles.chart}/>
                    </Container>
                    <Container classes={styles.wrapper} title={'required battery amount'}>
                        <ReLineChart classes={styles.chart}/>
                    </Container>
                </div>
            }


            {showDialog && <TimePicker onClose={() => setShowDialog(false)} onSubmit={(start,end) => {
                setTime(`${start}_${end}`);
                setShowDialog(false);
            }}/>}
        </>

    )
}

function ParkDataError({error}:{error: ParkDataErrors}) {
    const headerText = error === ParkDataErrors.noData ? 'No Data' : 'Bad Interval';
    const bodyText : React.ReactNode = error === ParkDataErrors.noData ?
            'there is no data in this selected interval.' :
            'the chosen time interval is not allowed.';

    return(
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
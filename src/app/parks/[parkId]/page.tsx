'use client'
import React from "react";
import globalStyles from "@/app/styles.module.css";
import {ReLineChart} from "@/UI/Charts/Line/ReLineChart";
import styles from './styles.module.css';
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import Icon from "@/UI/Components/Icon";
import * as Select from "@radix-ui/react-select";
import {SelectItemProps} from "@radix-ui/react-select";
import Dialog from "@/UI/Components/Dialog";
import Button from "@/UI/Components/Button";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {usePathname, useRouter} from "next/navigation";
import SelectMenu from "@/UI/Components/Select/Select";
import {BODY_LARGE, HEADLINE_LARGE, HEADLINE_MEDIUM, HEADLINE_SMALL} from "@/UI/Tokens/Typography";
import TimePicker from "@/app/parks/[parkId]/DatePickerDialog";
import Card from "@/UI/Components/Card";
import {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";
import {Metadata, ResolvingMetadata} from "next";
import {Props} from "recharts/types/component/ResponsiveContainer";
import {ReBarChart} from "@/UI/Charts/Bar/ReBarChart";
import {ReRadialChart} from "@/UI/Charts/Radial/ReRadialChart";
import {ReComposedChart} from "@/UI/Charts/Composed/ReComposedChart";
import {refreshParkData} from "@/UI/Components/Parks";

// 5 Minutes -> 5 * 60
export const revalidate = 300

type PageParams = {
    params: {
        parkId: string
    }
    searchParams: {
        time: string
    }
}

// export async function generateMetadata(
//     { params, searchParams }: PageParams,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     const id = params.parkId
//     const product = await fetch(`https://.../${id}`).then((res) => res.json())
//     return {
//         title: product.title,
//     }
// }


const preDefinedOptions = {
    '1h': 'Past Hour',
    '4h': 'Past 4 Hour',
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

    const splitted = option.split('~');
    if (splitted.length !== 2)
        return false;

    return false;
}

function Container({title, children, classes} : { title?: string, classes?: string | undefined, children: React.ReactNode }) {
    return (
        <Card classes={classes}>
            {title && <h1 className={HEADLINE_SMALL}>
                {title}
            </h1>}
            {children}
        </Card>
    )
}

function Page({params: {parkId}, searchParams: {time}}: PageParams) {
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
            <div className={globalStyles.maxwidth_wrapper} id={process.env.skipToContentHref}>
                <h1 className={HEADLINE_LARGE}>{parkId}</h1>
                <Container classes={styles.filter}>
                    <SelectMenu triggerStyles={styles.border} options={[
                        Object.entries(preDefinedOptions),
                        Object.entries(customRangeOptions)
                    ]} value={timeA} onValueChange={(newValue) => {
                        if (newValue === 'custom') {
                            console.log('datepicker');
                            setShowDialog(true);
                            return;
                        }

                        if(isValidDateOption(newValue))
                            setTime(newValue);

                    }}/>
                    <Button buttonType={'none'} onClick={() => {
                        refreshParkData();
                    }}>
                        <Icon icon={'RefreshCw'} fill={'transparent'}/>
                        <VisuallyHiddenClient>Refresh park data</VisuallyHiddenClient>
                    </Button>
                </Container>

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
        </div>
            {showDialog && <TimePicker onClose={() => setShowDialog(false)} onSubmit={() => {}} />}
        </>

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

export default Page;
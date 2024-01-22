import {
    Bar,
    BarChart,
    CartesianGrid, ComposedChart,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis, XAxisProps,
    YAxis
} from "recharts";
import Components from "recharts"
import React, {type SVGProps, useId} from "react";
import styles from './styles.module.css'
import {Props} from 'recharts/types/component/ResponsiveContainer'
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";
import {AccessibleToolTip, Formatter, ValueFormatter} from "@/UI/Charts/AccessibleTooltip";
import {coloursWheel, getType, standardData} from "@/UI/Charts/ChartGlobals";
import {AccessibilityInfo} from "@/UI/Charts/AccessibilityInfo";

export type AxisOptions = {
    type?: 'line' | 'bar',
    dataKeys: string[]
}

export type ReLineChartProps = {
    classes?: string | undefined,
    leftAxisOptions? : AxisOptions,
    rightAxisOptions? : AxisOptions,
    xAxisOptions?: Omit<SVGProps<SVGElement>, 'scale'> & XAxisProps,
    formatter?: Formatter,
    legendFormatter?: ValueFormatter,
    labelFormatter?: ValueFormatter
    data?: any[]
} & Omit<Props, 'className' | 'children'>

export function ReComposedChart({classes, leftAxisOptions, rightAxisOptions, xAxisOptions, formatter, data, legendFormatter, labelFormatter, ...props} : ReLineChartProps) {
    const id = useId();
    const TypeLeft = getType(leftAxisOptions?.type ?? 'bar')
    const TypeRight = getType(rightAxisOptions?.type ?? 'line');

    return (
        <>
            <AccessibilityInfo id={`${id}-controls`}/>
            <ResponsiveContainer width={'100%'} height={400}
                                 className={ConcatClasses(styles.wrapper, classes)} {...props}>
                <ComposedChart accessibilityLayer width={730} height={250} data={data ?? standardData}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}} aria-describedby={`${id}-controls`}
                           aria-label={'chart'}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name" {...xAxisOptions} />
                    <YAxis yAxisId={'yaxis0'}/>
                    <YAxis yAxisId={'yaxis1'} orientation={'right'}/>
                    <Tooltip content={<AccessibleToolTip formatter={formatter} labelFormatter={labelFormatter}/>}/>
                    <Legend formatter={legendFormatter}/>
                    {leftAxisOptions?.dataKeys.map((type, index) => {
                        return (
                            <TypeLeft dot={false} key={crypto.randomUUID()} yAxisId={'yaxis0'} stroke={coloursWheel[index%coloursWheel.length]} dataKey={type} fill={coloursWheel[index%coloursWheel.length]} />
                        )
                    })}
                    {rightAxisOptions?.dataKeys.map((type, index) => {
                        return (
                            <TypeRight dot={false} key={crypto.randomUUID()} yAxisId={'yaxis1'} fill={'var(--color-on-background)'} dataKey={type} stroke={coloursWheel[coloursWheel.length+index-1%coloursWheel.length]} strokeDasharray="3 3" />
                        )
                    })}
                    {/*<Bar dataKey="pv" fill="var(--color-primary)" stroke={'var(--color-outline)'} yAxisId={'yaxis0'} />*/}
                    {/*<Line type="monotone" dataKey="uv" stroke='var(--color-outline)' yAxisId={'yaxis1'} strokeDasharray="3 3" />*/}
                </ComposedChart>
            </ResponsiveContainer>
        </>

    );
}
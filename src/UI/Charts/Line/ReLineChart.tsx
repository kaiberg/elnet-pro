import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, XAxisProps, YAxis} from "recharts";
import React, {type SVGProps, useId} from "react";
import styles from './styles.module.css'
import {Props} from 'recharts/types/component/ResponsiveContainer'
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";
import {AccessibleToolTip, Formatter, ValueFormatter} from "@/UI/Charts/AccessibleTooltip";
import {AccessibilityInfo} from "@/UI/Charts/AccessibilityInfo";
import {coloursWheel, standardData} from "@/UI/Charts/ChartGlobals";

export type AxisOptions = {
    dataKeys: string[]
}

export type ReLineChartProps = {
    classes?: string | undefined,
    formatter?: Formatter,
    leftAxisOptions?: AxisOptions,
    rightAxisOptions?: AxisOptions,
    xAxisOptions?: Omit<SVGProps<SVGElement>, 'scale'> & XAxisProps,
    data?: any[],
    legendFormatter?: ValueFormatter,
    labelFormatter?: ValueFormatter
} & Omit<Props, 'className' | 'children'>

const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100,
        "test": 500
    }
]

export function ReLineChart({classes, formatter, leftAxisOptions, rightAxisOptions, xAxisOptions, data = standardData,
                                legendFormatter = (v) => v, labelFormatter = (v) => v, ...props}: ReLineChartProps) {
    const id = useId();

    return (
        <>
            <AccessibilityInfo id={`${id}-controls`}/>
            <ResponsiveContainer width={'100%'} height={400}
                                 className={ConcatClasses(styles.wrapper, classes)} {...props}>
                <LineChart accessibilityLayer width={730} height={250} data={data}
                           margin={{top: 0, right: 0, left: 0, bottom: 0}} aria-describedby={`${id}-controls`}
                           aria-label={'chart'}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name" {...xAxisOptions} />
                    {leftAxisOptions !== undefined && <YAxis yAxisId={'yaxis0'}/> }
                    {rightAxisOptions !== undefined && <YAxis yAxisId={'yaxis1'} orientation={'right'}/> }
                    <Tooltip content={<AccessibleToolTip formatter={formatter} labelFormatter={labelFormatter}/>}/>
                    <Legend formatter={legendFormatter}/>
                    {leftAxisOptions?.dataKeys.map((type, index) => {
                        return (
                            <Line type="monotone" key={crypto.randomUUID()} yAxisId={'yaxis0'} stroke={coloursWheel[index%coloursWheel.length]} dataKey={type} fill={coloursWheel[index%coloursWheel.length]} />
                        )
                    })}
                    {rightAxisOptions?.dataKeys.map((type, index) => {
                        return (
                            <Line type="monotone" key={crypto.randomUUID()} yAxisId={'yaxis1'} fill={'var(--color-on-background)'} dataKey={type} stroke={coloursWheel[index+1%coloursWheel.length]} strokeDasharray="3 3" />
                        )
                    })}
                </LineChart>
            </ResponsiveContainer>
        </>

    )
}
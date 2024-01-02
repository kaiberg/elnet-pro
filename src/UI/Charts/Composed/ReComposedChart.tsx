import {
    Bar,
    BarChart,
    CartesianGrid, ComposedChart,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import React, {useId} from "react";
import styles from './styles.module.css'
import {Props} from 'recharts/types/component/ResponsiveContainer'
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";
import {AccessibleToolTip} from "@/UI/Charts/AccessibleTooltip";
import {standardData} from "@/UI/Charts/ChartGlobals";

export type ReLineChartProps = {
    classes?: string | undefined
} & Omit<Props, 'className' | 'children'>

export function ReComposedChart({classes, ...props} : ReLineChartProps) {
    const id = useId();

    return (
        <>
            <VisuallyHiddenClient id={`${id}-controls`}>
                use the left arrow key to navigate to the previous datapoint, and the right to the next datapoint
            </VisuallyHiddenClient>
            <ResponsiveContainer width={'100%'} height={400}
                                 className={ConcatClasses(styles.wrapper, classes)} {...props}>
                <ComposedChart accessibilityLayer width={730} height={250} data={standardData}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}} aria-describedby={`${id}-controls`}
                           aria-label={'chart'}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis yAxisId={'yaxis0'}/>
                    <YAxis yAxisId={'yaxis1'} orientation={'right'}/>
                    <Tooltip content={<AccessibleToolTip/>}/>
                    <Legend/>
                    <Bar dataKey="pv" fill="#8884d8" stroke={'var(--color-primary)'} yAxisId={'yaxis0'} />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={'yaxis1'} strokeDasharray="3 3" />
                </ComposedChart>
            </ResponsiveContainer>
        </>

    );
}
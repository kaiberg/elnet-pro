import {
    Bar,
    BarChart,
    CartesianGrid,
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

export type ReLineChartProps = {
    classes?: string | undefined
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
        "test":500
    }
]

function AccessibleToolTip(props : any) {

    console.log(props)
    return (
            <div role="status" aria-live={"assertive"}>
                <h1>{props.label}</h1>
                <p>2 results returned.</p>
                <h1>Client of the week</h1>
            </div>
    )
}

export function ReBarChart({classes, ...props} : ReLineChartProps) {
    const id = useId();

    return (
        <>
            <VisuallyHiddenClient id={`${id}-controls`}>
                use the left arrow key to navigate to the previous datapoint, and the right to the next datapoint
            </VisuallyHiddenClient>
            <ResponsiveContainer width={'100%'} height={400}
                                 className={ConcatClasses(styles.wrapper, classes)} {...props}>
                <BarChart accessibilityLayer width={730} height={250} data={data}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}} aria-describedby={`${id}-controls`}
                           aria-label={'chart'}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip content={<AccessibleToolTip/>}/>
                    <Legend/>
                    <Bar dataKey="pv" fill="#8884d8" stroke={'var(--color-primary)'}/>
                    <Bar dataKey="uv" fill="#82ca9d"/>
                </BarChart>
            </ResponsiveContainer>
        </>

    );
}
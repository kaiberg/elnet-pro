import {
    CartesianGrid,
    Legend,
    Line,
    LineChart, RadialBar,
    RadialBarChart,
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
import {coloursWheel} from "@/UI/Charts/ChartGlobals";

type RadialDataPoint = {
    name: string,
    key: number,
    fill?: string
}

export type RadialChartProps = {
    data?: RadialDataPoint[]
    classes?: string | undefined
} & Omit<Props, 'className' | 'children'>

const exampleData = [
    {
        "name": "Page A",
        "key": 4000,
    },
    {
        "name": "Page B",
        "key": 3000,
    },
    {
        "name": "Page C",
        "key": 2000,
    },
    {
        "name": "Page D",
        "key": 2780,
    },
    {
        "name": "Page E",
        "key": 1890,
    },
    {
        "name": "Page F",
        "key": 2390,
    },
    {
        "name": "Page G",
        "key": 3490,
    }
]

export function ReRadialChart({classes, data = exampleData, ...props} : RadialChartProps) {
    const id = useId();

    const dataFormatted = React.useMemo(() => {
        return data
            .sort((a, b) => a.key - b.key)
            .map((item, index) => ({...item, fill: coloursWheel[index%coloursWheel.length]}));
    }, [data])

    return (
        <>
            <VisuallyHiddenClient id={`${id}-controls`}>
                Bar chart show in a radial format, containing the following data:
                {data.map(({name, key}) => (
                    <p key={crypto.randomUUID()}>{name} with a value of {key}</p>
                ))}
            </VisuallyHiddenClient>
        <ResponsiveContainer width={'100%'} height={400} className={ConcatClasses(styles.wrapper, classes)} {...props}>
            <RadialBarChart accessibilityLayer width={730} height={400} data={dataFormatted} startAngle={180}
                            endAngle={0}
                        aria-describedby={`${id}-controls`} aria-label={'chart'}
                            innerRadius="10%"
                            outerRadius="80%"
            >
                {/*minAngle={15}  clockWise={true}*/}
                <RadialBar label={{ fill: 'var(--color-on-surface)', position: 'insideStart' }} background dataKey='key'/>
                <Legend iconSize={10} layout='horizontal' align="center" verticalAlign={'bottom'} wrapperStyle={{marginBottom: '120px', display:'relative'}}
                         />
                <Tooltip content={<AccessibleToolTip/>}/>
            </RadialBarChart>
        </ResponsiveContainer>
        </>

    )
}
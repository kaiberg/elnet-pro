import React from "react";
import globalStyles from '@/app/styles.module.css';
import styles from './styles.module.css'
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {ReLineChart} from "@/UI/Charts/Line/ReLineChart";
import ParksList from "@/UI/Components/ParksList";

const title = 'Parks'

export default function Parks() {
    return (
        <ParksList title={title} loadingCards={12}/>
    )
}
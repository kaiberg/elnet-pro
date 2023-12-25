'use client'
import React from "react";
import globalStyles from '@/app/styles.module.css';
import styles from './styles.module.css'
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {ReLineChart} from "@/UI/Charts/Line/LineChartRe";

export default function Parks() {
    return (
        <div className={globalStyles.maxwidth_wrapper}>
            <ReLineChart classes={styles.wrapper}/>
        </div>
    )
}
import React from "react";
import Card from "@/UI/Components/Card";
import styles from "./tooltip.module.css"
import {BODY_LARGE, HEADLINE_MEDIUM, HEADLINE_SMALL} from "@/UI/Tokens/Typography";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";

export type FormatterProps = {
    name: any,
    value: any
}

export type Formatter = (name: any, value : any) => React.ReactNode;
export type ValueFormatter = (value: any) => string;


export function AccessibleToolTip({label, payload, formatter, labelFormatter = (v) => v, ...props}: { label?: any, payload?: any, formatter?: any, labelFormatter?: ValueFormatter }) {
    const format : Formatter = typeof formatter === 'function' ?
        formatter :
        (name, value) => `${name} ${value}`;
    if(label == null || payload == null)
        return null

    return (
        <div role="status" aria-live={"assertive"}>
            <Card classes={styles.tooltip}>
                <h1 className={ConcatClasses(BODY_LARGE, styles.title)}>{labelFormatter(label)}</h1>
                {payload.map(({name, value, stroke}: {name: any, value: any, stroke: any}) => <p key={crypto.randomUUID()} className={styles.data} style={{
                    color: stroke
                }}>
                    {format(name,value)}
                </p>)}
            </Card>
        </div>)
}
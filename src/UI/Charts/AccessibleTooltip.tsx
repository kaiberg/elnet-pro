import React from "react";
import Card from "@/UI/Components/Card";
import styles from "./tooltip.module.css"

export function AccessibleToolTip(props : any) {
    return (
        <div role="status" aria-live={"assertive"}>
            <Card classes={styles.tooltip}>
                <h1>{props.label}</h1>
                <p>2 results returned.</p>
                <h1>Client of the week</h1>
            </Card>
        </div>
    )
}
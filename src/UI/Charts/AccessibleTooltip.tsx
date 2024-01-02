import React from "react";

export function AccessibleToolTip(props : any) {

    console.log(props)
    return (
        <div role="status" aria-live={"assertive"}>
            <h1>{props.label}</h1>
            <p>2 results returned.</p>
            <h1>Client of the week</h1>
        </div>
    )
}
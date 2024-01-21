import {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";
import React from "react";

export function AccessibilityInfo({id} : {id: string}) {
    return (
        <VisuallyHiddenClient id={id}>
            use the left arrow key to navigate to the previous datapoint, and the right to the next datapoint
        </VisuallyHiddenClient>
    )
}

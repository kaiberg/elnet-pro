import React, {ComponentPropsWithoutRef } from "react";
import styles from './styles.module.css';
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";

export type TextFieldProps = {
    borderRadius?: 1 | 2 | 3 | 4 | 5 | 6;
    borderType?: "outlined" | "filled"
    classes?: string
} & Omit<ComponentPropsWithoutRef<"input">, 'className'>

export default React.forwardRef<HTMLInputElement, TextFieldProps>(
    function TextField({borderType = "outlined", borderRadius, classes, ...props} : TextFieldProps, ref) {
        const typeClass = borderType === "outlined" ? styles.outlined : styles.filled;

        return (
            <input className={ConcatClasses(styles.input, typeClass, classes)} {...props} ref={ref} />
        )
    }
)
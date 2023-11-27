import React, {ComponentPropsWithoutRef} from "react";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import styles from './styles.module.css';
import {LABEL_LARGE} from "@/UI/Tokens/Typography";

export type ButtonProps<T extends React.ElementType> = {
    classes?: string | undefined,
    children: React.ReactNode,
    as?: T
} & ComponentPropsWithoutRef<T>

export default function Button<T extends React.ElementType = 'button'>({classes, children, as, ...props} : ButtonProps<T>) {
    const Type = as || "button";

    return (
        <Type {...props} className={ConcatClasses(LABEL_LARGE, styles.button, classes)}>{children}</Type>
    )
}
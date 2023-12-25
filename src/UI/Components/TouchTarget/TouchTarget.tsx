import React, {ComponentPropsWithoutRef} from "react";
import styles from './styles.module.css'
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";

export type TouchTargetProps<T extends React.ElementType> = {
    as?: T | undefined,
    classes?: string | undefined
} & ComponentPropsWithoutRef<T>

export default function TouchTarget<T extends React.ElementType = 'button'>({as, classes, ...props} : TouchTargetProps<T>) {
    const Type = as || 'button';

    return (
        <Type {...props} className={ConcatClasses(styles.container, classes)}/>
    )
}

export const ICON_TOUCHTARGET_CLASS = styles.icon;
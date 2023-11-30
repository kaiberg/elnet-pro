import React, {ComponentPropsWithoutRef} from "react";
import styles from './styles.module.css'

export type TouchTargetProps<T extends React.ElementType> = {
    as?: T | undefined,
} & ComponentPropsWithoutRef<T>

export default function TouchTarget<T extends React.ElementType = 'button'>({as, ...props} : TouchTargetProps<T>) {
    const Type = as || 'button';

    return (
        <Type {...props} className={styles.container}/>
    )
}

export const ICON_TOUCHTARGET_CLASS = styles.icon;
import React, {ComponentPropsWithoutRef} from "react";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import styles from './styles.module.css';
import {LABEL_LARGE} from "@/UI/Tokens/Typography";

export type ButtonProps<T extends React.ElementType> = {
    classes?: string | undefined,
    as?: T | undefined
    buttonShape?: "none" | "extra-small" | "small" | "medium" | "large" | "extra-large" | "full",
    buttonType?: "none" | "text" | "elevated" | "tonal" | "filled" | "outlined"
} & Omit<ComponentPropsWithoutRef<T>, 'className'>

export default function Button<T extends React.ElementType = 'button'>({
                                                                           classes,
                                                                           children,
                                                                           as,
                                                                           buttonShape = 'small',
                                                                           buttonType = 'text',
                                                                           ...props
                                                                       }: ButtonProps<T>) {
    const TypeErrorFix = as || 'button'
    const shapeClass = styles[buttonShape];
    const typeClass = buttonType === "none" ? undefined : styles[buttonType];

    return (
        <TypeErrorFix {...props} className={ConcatClasses(LABEL_LARGE, styles.button, shapeClass, typeClass, classes)}>
                {children}
        </TypeErrorFix>
    )
}
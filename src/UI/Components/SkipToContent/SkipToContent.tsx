import React, {ComponentPropsWithoutRef} from "react";
import styles from './styles.module.css';
import {formatVariable} from "@/Helpers/Formatting/FormatVariable";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";

export type SkipToContentProps = {
    children?: React.ReactElement,
    href?: string,
    classes?: string,
    props?: ComponentPropsWithoutRef<'a'>
}

export default function SkipToContent({href = process.env.skipToContentHref, classes, children, ...props} : SkipToContentProps) {
    if(typeof href !== 'string') {
        throw new Error(`Skip to main content href was not a string, actual values: ${formatVariable('href',href)}`)
    }

    if(!href?.startsWith('#')) {
        throw new Error(`Skip to main content href did not start with '#', actual value: ${formatVariable('href', href)}`)
    }

    return (
        <a {...props} href={href} className={ConcatClasses(styles.wrapper, classes)}>
            {children ?? 'Skip to Content'}
        </a>
    )
}
import React, {ComponentPropsWithoutRef} from 'react'
import styles from './styles.module.css'
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {useKeyDown} from "@/CustomHooks/useKeyDown";
import {useDevelopment} from "@/CustomHooks/useDevelopment";

type VisuallyCustomHiddenProps<T extends React.ElementType> = {
    children: React.ReactNode,
    as?: T | undefined,
    classes?: string | undefined,
}

export type VisuallyHiddenProps<T extends React.ElementType> = VisuallyCustomHiddenProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof VisuallyCustomHiddenProps<T>>


export default function VisuallyHidden<T extends React.ElementType = 'span'>({
                                                                                 children,
                                                                                 as,
                                                                                 classes,
                                                                                 ...props
                                                                             }: VisuallyHiddenProps<T>) {
    const Type = as || 'span';

    return (
        <Type {...props} className={ConcatClasses(styles.visuallyhidden, classes)}>
            {children}
        </Type>
    )
}

export function VisuallyHiddenClient<T extends React.ElementType = 'span'>({
                                                                               children,
                                                                               as,
                                                                               classes,
                                                                               ...props
                                                                           }: VisuallyHiddenProps<T>) {
    const [showRawContent, setForceShowRaw] = React.useState(false);

    useDevelopment(useKeyDown('End', () => setForceShowRaw(true)))

    React.useEffect(function () {
        let timeoutId: number | undefined;
        if (showRawContent) {
            timeoutId = window.setTimeout(() => {
                setForceShowRaw(false);
            }, 10 * 1000)
        }

        return function () {
            window.clearInterval(timeoutId);
        }
    }, [showRawContent])

    const typeErrorFix = as || "span";

    if (showRawContent) {
        return children;
    }

    return (
        <VisuallyHidden {...props} classes={classes} as={typeErrorFix}>
            {children}
        </VisuallyHidden>
    )
}
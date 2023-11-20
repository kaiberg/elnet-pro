import React, {ComponentPropsWithoutRef} from 'react'
import styles from './styles.module.css'
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";

export type VisuallyHiddenProps<T extends React.ElementType> = {
    children: React.ReactNode,
    as?: T,
    classes?: string | undefined
    props?: ComponentPropsWithoutRef<T>,
}

export default function VisuallyHidden<T extends React.ElementType = 'span'>({
                                                                                 children,
                                                                                 as,
                                                                                 classes,
                                                                                 props
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
                                                                               ...props
                                                                           }: VisuallyHiddenProps<T>) {
    const [showRawContent, setForceShowRaw] = React.useState(false);
    React.useEffect(function () {
        if (process.env.NODE_ENV === 'production') {
            return;
        }
        const showChildrenOnPress = (ev: KeyboardEvent) => {
            if (ev.key === 'End') {
                setForceShowRaw(true);
            }
        };

        window.addEventListener('keydown', showChildrenOnPress);

        return () => {
            window.removeEventListener('keydown', showChildrenOnPress);
        };
    }, []);

    React.useEffect(function () {
        let id: number | undefined;
        if (showRawContent) {
            id = window.setTimeout(() => {
                setForceShowRaw(false);
            }, 10 * 1000)
        }

        return function () {
            window.clearInterval(id);
        }
    }, [showRawContent])


    if (showRawContent) {
        return children;
    }

    return (
        <VisuallyHidden {...props}>
            {children}
        </VisuallyHidden>
    )
}

export const TEST1 = () => {
    return (
        <>
            <VisuallyHidden as={'aside'}>
                <p>childreno</p>
            </VisuallyHidden>
            <VisuallyHidden>
                <p>childreno1</p>
            </VisuallyHidden>
        </>

    )
}
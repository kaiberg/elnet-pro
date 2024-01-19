import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {ComponentPropsWithoutRef} from "react";
import styles from './styles.module.css'

export type CardBorder = "none" | "extraSmall" | "extraSmallTop" | "small" | "medium" |
    "large" | "largeEnd" | "largeStart" | "largeTop" | "extraLarge" | "extraLargeTop" | "full";

function Card({classes, children, BorderType = "small", ...props} : ComponentPropsWithoutRef<'div'> & {classes?: string | undefined, BorderType?: CardBorder}) {
    const borderClass = styles[BorderType];
    return (
        <div {...props} className={ConcatClasses(styles.border, borderClass, classes)}>
            {children}
        </div>
    )
}

export default Card;
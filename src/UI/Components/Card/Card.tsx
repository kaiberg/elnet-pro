import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {ComponentPropsWithoutRef} from "react";
import styles from './styles.module.css'


function Card({classes, children, ...props} : ComponentPropsWithoutRef<'div'> & {classes?: string | undefined}) {
    return (
        <div {...props} className={ConcatClasses(styles.border, classes)}>
            {children}
        </div>
    )
}

export default Card;
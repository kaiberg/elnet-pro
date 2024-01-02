import styles from './styles.module.css';
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {HEADLINE_LARGE} from "@/UI/Tokens/Typography";
import Link from "next/link";

export default function Logo(props : { className?: string}) {
    return (
        <Link href='/' {...props}>
            {/*ensure the logo never splits up to seperate lines*/}
            <span className={ConcatClasses(HEADLINE_LARGE, styles.logo)}>Elnet&nbsp;Pro</span>
        </Link>
    )
}
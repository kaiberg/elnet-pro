import Link from 'next/link'
import styles from './styles.module.css'
import globalSyles from '@/app/styles.module.css'
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";

export default function NotFound() {
    return (
        <div className={ConcatClasses(globalSyles.maxwidth_wrapper, styles.wrapper)}>
            <h1 className={styles.header}>Not Found</h1>
            <h2 className={styles.information}>This page could not be found.</h2>
            <Link href="/" className={styles.go_back}>Go back home</Link>
        </div>
    )
}
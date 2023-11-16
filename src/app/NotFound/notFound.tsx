import Link from 'next/link'
import styles from './styles.module.css'
import globalSyles from '@/app/styles.module.css'

export default function NotFound() {


    return (
        <div className={`${globalSyles.maxwidth_wrapper} ${styles.wrapper}`}>
            <h2 className={styles.header}>Not Found</h2>
            <p className={styles.information}>This page could not be found.</p>
            <Link href="/" className={styles.go_back}>Go back home</Link>
        </div>
    )
}
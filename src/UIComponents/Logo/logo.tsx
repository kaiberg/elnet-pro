import styles from './styles.module.css';

export default function Logo(props : { className?: string}) {
    return (
        <a href='/' {...props}>
            <span className={styles.logo}>Elnet Pro</span>
        </a>
    )
}
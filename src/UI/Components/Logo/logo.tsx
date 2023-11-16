import styles from './styles.module.css';

export default function Logo(props : { className?: string}) {
    return (
        <a href='/' {...props}>
            {/*ensure the logo never splits up to seperate lines*/}
            <span className={styles.logo}>Elnet&nbsp;Pro</span>
        </a>
    )
}
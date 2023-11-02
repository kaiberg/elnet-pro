import Logo from '@/UIComponents/Logo/logo';
import globalStyles from '@/app/styles.module.css';
import styles from './styles.module.css';

export default function Footer() {
    return (
        <footer className={`${globalStyles.maxwidth_wrapper} ${styles.wrapper}`}>
            {/* logo / copyright */}
            <div className={styles.copyright_wrapper}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <p className={styles.normal_copyright}>© 2023</p>
            </div>
            {/* links */}
            <div className={styles.links_wrapper}>
                <div>
                    <p>L1</p>
                    <div className={styles.page_links_wrapper}>
                        <a>Latest</a>
                        <a>Parks</a>
                    </div>
                </div>
                <div>
                    <p>Links</p>
                    <div className={styles.legal_links_wrapper}>
                        <a>Contact</a>
                        <a>Terms of use</a>
                        <a>Privacy Policy</a>
                    </div>
                </div>
            </div>

            <p className={styles.mobile_copyright}>© 2023</p>
        </footer>
    )
}
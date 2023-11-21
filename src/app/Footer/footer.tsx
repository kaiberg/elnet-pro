import Logo from '@/UI/Components/Logo';
import globalStyles from '@/app/styles.module.css';
import styles from './styles.module.css';
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";

export default function Footer() {
    return (
        <footer className={ConcatClasses(globalStyles.maxwidth_wrapper, styles.wrapper)}>
            {/* logo / copyright */}
            <div className={styles.copyright_wrapper}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <p className={styles.normal_copyright}>© 2023. All Rights Reserved.</p>
            </div>
            {/* links */}
            <div className={styles.links_wrapper}>
                <div>
                    <p>Pages</p>
                    <div className={styles.page_links_wrapper}>
                        <a href=''>Latest</a>
                        <a href=''>Parks</a>
                    </div>
                </div>
                <div>
                    <p>Links</p>
                    <div className={styles.legal_links_wrapper}>
                        <a href=''>Contact</a>
                        <a href=''>Terms of use</a>
                        <a href=''>Privacy Policy</a>
                    </div>
                </div>
            </div>

            <p className={styles.mobile_copyright}>© 2023</p>
        </footer>
    )
}
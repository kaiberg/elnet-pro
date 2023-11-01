'use client'
import styles from './styles.module.css';
import globalStyles from '../styles.module.css';
import { usePathname } from "next/navigation";
export type HeaderProps = {
    slug: string
}
import Image from 'next/image'
import Logo from '@/UIComponents/Logo/logo';


export function Header({ slug }: HeaderProps) {
    const path = usePathname();

    console.log(path);

    return (
        <div className={styles.mainwrapper}>
            <header className={`${globalStyles.maxwidth_wrapper} ${styles.wrapper}`}>
                {/* icon, links */}
                <div className={styles.links}>
                    <Logo className={styles.logo} />
                    <nav className={styles.links}>
                        <a className={styles.link}>Overview</a>
                        <a className={styles.link}>Overview</a>
                    </nav>

                </div>
                {/* login / controls */}
                <div className={styles.right_side}>
                    <Image width={48} height={48} src={''} alt='lightmode' />
                    <Image width={48} height={48} src={''} alt='profile' className={styles.userprofile} />
                </div>
            </header>
        </div>
    )
}
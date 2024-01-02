import React from "react";
import Logo from '@/UI/Components/Logo';
import globalStyles from '@/app/styles.module.css';
import styles from './styles.module.css';
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {BODY_SMALL} from "@/UI/Tokens/Typography";
import Link from "next/link";

type cssClass = string | undefined
export type FooterLinksProps = {
    wrapper?: cssClass,
    pagesWrapper?: cssClass,
    legalWrapper?: cssClass,
    linkClass?: cssClass,
    linkTitleClass?: cssClass
}

export function FooterLinks({wrapper, pagesWrapper, legalWrapper, linkClass, linkTitleClass}: FooterLinksProps) {
    return (
        <div className={wrapper}>
            <div>
                <h1 className={linkTitleClass}>Pages</h1>
                <div className={pagesWrapper}>
                    <Link href='/parks/latest' className={linkClass}>Latest</Link>
                    <Link href='/parks' className={linkClass}>Parks</Link>
                </div>
            </div>
            <div>
                <h1 className={linkTitleClass}>Links</h1>
                <div className={legalWrapper}>
                    <Link href='/contact' className={linkClass}>Contact</Link>
                    <Link href='/terms' className={linkClass}>Terms of use</Link>
                    <Link href='/privacy' className={linkClass}>Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className={ConcatClasses(globalStyles.maxwidth_wrapper, styles.wrapper)}>
            {/* logo / copyright */}
            <div className={styles.copyright_wrapper}>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <p className={ConcatClasses(BODY_SMALL, styles.normal_copyright)}>© 2023. All Rights Reserved.</p>
            </div>
            <FooterLinks wrapper={styles.links_wrapper} pagesWrapper={styles.page_links_wrapper}
                         legalWrapper={styles.legal_links_wrapper}/>

            <p className={ConcatClasses(BODY_SMALL, styles.mobile_copyright)}>© 2023</p>
        </footer>
    )
}
'use client'
import styles from './styles.module.css';
import dialogStyles from './dialog.module.css'
import globalStyles from '../styles.module.css';
import { usePathname } from "next/navigation";
import Image from 'next/image'
import Logo from '@/UI/Components/Logo/Logo';
import DarkToggle from '@/UI/Components/DarkToggle/DarkToggle';
import Dialog from "@/UI/Components/Dialog/Dialog";
import React, {useState} from "react";
import TextField from "@/UI/Components/TextField";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";

export type HeaderProps = {
    slug: string
}

export default function Header({ slug }: HeaderProps) {
    const path = usePathname();

    console.log(path);

    return (
        <div className={styles.mainwrapper}>
            <header className={ConcatClasses(globalStyles.maxwidth_wrapper, styles.wrapper)}>
                {/* icon, links */}
                <div className={styles.left_side}>
                    <Logo className={styles.logo} />
                    <nav className={styles.links}>
                        <a className={styles.link}>Overview</a>
                        <a className={styles.link} href='/parks'>Parks</a>
                    </nav>

                </div>
                {/* login / controls */}
                <div className={styles.right_side}>
                    <DarkToggle/>
                    <LoginInfo/>
                </div>
            </header>
        </div>
    )
}

function LoginInfo() {
    const [s,ss] = useState(true);

    function flip() {
        ss(s => !s);
    }

    return (
        <React.Fragment>
            {s && <Dialog onClose={flip} contentClasses={dialogStyles.container}>
                <>
                    <div>
                        <TextField placeholder="Username" />
                        <VisuallyHiddenClient>
                            Username field
                        </VisuallyHiddenClient>
                        <TextField placeholder="Password" type={"password"} />
                        <VisuallyHiddenClient>
                            Password field
                        </VisuallyHiddenClient>
                    </div>
                    <button className={dialogStyles.close_button} onClick={flip}>X</button>
                    <VisuallyHiddenClient>
                        Close Button
                    </VisuallyHiddenClient>
                </>
            </Dialog>}
            <Image width={48} height={48} src={''} alt='profile' className={styles.userprofile} onClick={flip} />
            <VisuallyHiddenClient>
                Profile Picture With user control panel
            </VisuallyHiddenClient>
        </React.Fragment>
    )

}
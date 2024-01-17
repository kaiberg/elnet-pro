'use client'
import styles from './styles.module.css';
import dialogStyles from './dialog.module.css'
import mobileDialogStyles from './mobileDialog.module.css';
import globalStyles from '../styles.module.css';
import {usePathname} from "next/navigation";
import Logo from '@/UI/Components/Logo/Logo';
import DarkToggle from '@/UI/Components/DarkToggle/DarkToggle';
import Dialog from "@/UI/Components/Dialog/Dialog";
import React, {useId, useState} from "react";
import TextField from "@/UI/Components/TextField";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import VisuallyHidden, {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";
import {ICON_TOUCHTARGET_CLASS} from '@/UI/Components/TouchTarget';
import Icon from "@/UI/Components/Icon";
import Button from "@/UI/Components/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {LoginSchema, TLoginSchema} from "@/app/Header/LoginForm";
import {zodResolver} from "@hookform/resolvers/zod";
import {DISPLAY_MEDIUM, HEADLINE_MEDIUM, TITLE_MEDIUM} from "@/UI/Tokens/Typography";
import {useHasMounted} from "@/CustomHooks/useHasMounted";
import {FooterLinks} from "@/app/Footer/footer";
import Link from "next/link";
import {loginStatus, loginUser, UserDetails} from "@/UI/Components/Authorization";
import { useRouter } from 'next/navigation'
import {LoginInfo} from "@/app/Header/LoginInfo/LoginInfo";
export type HeaderProps = {
    slug: string,
} & UserProps

export type UserProps = {
    user: UserDetails | undefined
}

export default function Header({slug, user}: HeaderProps) {
    const path = usePathname();
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const flipMobile = React.useCallback(() => {
        setShowMobileMenu((p) => !p)
    }, []);

    console.log(path);

    return (
        <div className={styles.mainwrapper}>
            <header className={ConcatClasses(globalStyles.maxwidth_wrapper, styles.wrapper)}>
                {/* icon, links */}
                <div className={styles.left_side}>
                    <Logo className={styles.logo}/>
                    <nav className={styles.links}>
                        <Link className={ConcatClasses(TITLE_MEDIUM, styles.link)} href='/parks/latest'>Latest</Link>
                        <Link className={ConcatClasses(TITLE_MEDIUM, styles.link)} href='/parks'>Parks</Link>
                    </nav>
                </div>
                {/* login / controls */}
                <div className={styles.right_side}>
                    <DarkToggle/>
                    <LoginInfo user={user}/>
                </div>
                <div className={styles.mobile_right_side}>
                    <Button buttonType={'none'} onClick={flipMobile}>
                        <Icon icon={'Menu'}/>
                        <VisuallyHiddenClient>Toggle mobile menu</VisuallyHiddenClient>
                    </Button>
                    {showMobileMenu && <MobileMenu user={user} onClose={flipMobile}/>}
                </div>
            </header>
        </div>
    )
}

function MobileMenu(props: { onClose: () => void} & UserProps) {
    const id = useId();
    const handleEvent = (e: React.MouseEvent<any> | React.KeyboardEvent<any>): void => {
        if (e.nativeEvent instanceof KeyboardEvent && e.nativeEvent.key === 'Escape'){
            return;
        }
        e.stopPropagation();
    };

    const stopPropogation = {
        onClick: handleEvent,
        onKeyDown: handleEvent
    }

    const title = `${id}-title`

    return (
        // close dialog if content is clicked
        <Dialog {...props} contentClasses={ConcatClasses(mobileDialogStyles.wrapper)} onClick={props.onClose} aria-labelledby={title}>
            <>
                <VisuallyHiddenClient as={'h1'} id={title}>Mobile Navigation Dialog</VisuallyHiddenClient>
                <Button buttonType={'none'} classes={mobileDialogStyles.close_button}>
                    <Icon aria-hidden={'true'} icon={'X'} width={32} height={32}/>
                    <VisuallyHidden>Close</VisuallyHidden>
                </Button>
                <nav aria-label={'Mobile navigation'} className={mobileDialogStyles.nav}>
                    <FooterLinks linkTitleClass={DISPLAY_MEDIUM} linkClass={HEADLINE_MEDIUM} pagesWrapper={mobileDialogStyles.links_wrapper} legalWrapper={mobileDialogStyles.links_wrapper}/>
                    <div className={mobileDialogStyles.bottom_actions} {...stopPropogation}>
                        <DarkToggle/>
                        <LoginInfo user={props.user}/>
                    </div>
                </nav>
            </>

        </Dialog>
    )
}
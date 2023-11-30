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

export type HeaderProps = {
    slug: string
}

export default function Header({slug}: HeaderProps) {
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
                        <a className={ConcatClasses(TITLE_MEDIUM, styles.link)} href='/'>Overview</a>
                        <a className={ConcatClasses(TITLE_MEDIUM, styles.link)} href='/parks'>Parks</a>
                    </nav>
                </div>
                {/* login / controls */}
                <div className={styles.right_side}>
                    <DarkToggle/>
                    <LoginInfo/>
                </div>
                <div className={styles.mobile_right_side}>
                    <button onClick={flipMobile}>
                        <Icon icon={'Menu'}/>
                        <VisuallyHiddenClient>Toggle mobile menu</VisuallyHiddenClient>
                    </button>
                    {showMobileMenu && <MobileMenu onClose={flipMobile}/>}
                </div>
            </header>
        </div>
    )
}

function MobileMenu(props: { onClose: () => void }) {
    const id = useId();
    const handleEvent = (e: React.MouseEvent<any> | React.KeyboardEvent<any>): void => {
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
                        <LoginInfo/>
                    </div>
                </nav>
            </>

        </Dialog>
    )
}

function LoginInfo() {
    const hasMounted = useHasMounted();
    const loggedIn = true;

    if(!hasMounted) {
        return null
    }

    if(loggedIn) {
        return (
            <LoggedIn/>
        )
    }

    return (
        <NotLoggedIn/>
    )
}

function NotLoggedIn() {
    const id = useId();
    const [showLoginModal, setShowLoginModal] = useState(false);

    const {register, handleSubmit, formState, watch} = useForm<TLoginSchema>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const title = `${id}-login-title`;
    const usernameId = `${id}-username`;
    const passwordId = `${id}-password`;

    function flip() {
        setShowLoginModal(p => !p);
    }

    const handleValidSubmit: SubmitHandler<TLoginSchema> = ({username, password}: TLoginSchema) => {
        console.log(`user logged in with ${username}, ${password}`)
    }

    return (
        <React.Fragment>
            {showLoginModal && <Dialog onClose={flip} overlayClasses={dialogStyles.overlay} contentClasses={dialogStyles.container}
                          aria-labelledby={title}>
                <div className={dialogStyles.wrapper}>
                    <VisuallyHiddenClient as={'h1'} id={title}>Log In</VisuallyHiddenClient>
                    <form onSubmit={handleSubmit(handleValidSubmit)}>
                        <div className={dialogStyles.dialogItem}>
                            <VisuallyHiddenClient as={'label'} htmlFor={usernameId}>
                                Username field
                            </VisuallyHiddenClient>
                            <TextField classes={dialogStyles.input} placeholder="Username"
                                       id={usernameId} {...register('username')} autoComplete={'username'}/>
                            <p>{formState.errors.username?.message}</p>
                        </div>

                        <div className={dialogStyles.dialogItem}>
                            <VisuallyHiddenClient as={'label'} htmlFor={passwordId}>
                                Password field
                            </VisuallyHiddenClient>
                            <TextField placeholder="Password" type={"password"} classes={dialogStyles.input}
                                       id={passwordId} {...register('password')} autoComplete={'current-password'}/>
                            <p>{formState.errors.password?.message}</p>
                        </div>

                        <div className={dialogStyles.dialogItem}>
                            <Button classes={dialogStyles.loginButton} buttonType={'filled'} type={'submit'}>Sign in</Button>
                        </div>
                    </form>
                    <button className={dialogStyles.close_button} onClick={flip}>
                        <Icon aria-hidden={'true'} icon={'X'} width={32} height={32}/>
                        <VisuallyHidden>Close</VisuallyHidden>
                    </button>

                    {process.env.NODE_ENV !== 'production' && <pre>
                        {JSON.stringify(watch(), null, 2)}
                    </pre>}
                </div>
            </Dialog>}
            {/*ConcatClasses(buttonStyles.container, buttonStyles.icon_container, styles.login_button)*/}
            <Button buttonType={'filled'} onClick={flip}>
                Log in
            </Button>
        </React.Fragment>
    );
}

function LoggedIn() {
    const username = 'kaidel045'
    const firstLetter = username.substring(0, 1).toUpperCase();

    return (
        <Button classes={styles.userprofile_button}>
            <span className={ConcatClasses(styles.userprofile, ICON_TOUCHTARGET_CLASS)}>
                {/*<Icon icon={'User'} />*/}
                <span aria-hidden={"true"}>{firstLetter}</span>
                <VisuallyHiddenClient>
                    User Profile
                </VisuallyHiddenClient>
            </span>
        </Button>
    )
}
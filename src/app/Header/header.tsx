'use client'
import styles from './styles.module.css';
import dialogStyles from './dialog.module.css'
import globalStyles from '../styles.module.css';
import {usePathname} from "next/navigation";
import Logo from '@/UI/Components/Logo/Logo';
import DarkToggle from '@/UI/Components/DarkToggle/DarkToggle';
import Dialog from "@/UI/Components/Dialog/Dialog";
import React, {useId, useState} from "react";
import TextField from "@/UI/Components/TextField";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import VisuallyHidden, {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";
import buttonStyles from '@/UI/Components/TouchTarget';
import Icon from "@/UI/Components/Icon";
import MobileNav from "@/UI/Components/MobileNav";
import Button from "@/UI/Components/Button";
import {useForm, SubmitHandler} from "react-hook-form";
import {LoginSchema, TLoginSchema} from "@/app/Header/LoginForm";
import {zodResolver} from "@hookform/resolvers/zod";

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
                        <a className={styles.link} href='/'>Overview</a>
                        <a className={styles.link} href='/parks'>Parks</a>
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
    return (
        <MobileNav {...props}>
            <input/>
        </MobileNav>
    )
}

function LoginInfo() {
    const id = useId();
    const [s, ss] = useState(false);

    const {register, handleSubmit, formState, watch} = useForm<TLoginSchema>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const usernameId = `${id}-username`;
    const passwordId = `${id}-password`

    function flip() {
        ss(s => !s);
    }

    const handleValidSubmit: SubmitHandler<TLoginSchema> = ({username, password}: TLoginSchema) => {
        console.log(`user logged in with ${username}, ${password}`)
    }

    return (
        <React.Fragment>
            {s && <Dialog onClose={flip} overlayClasses={dialogStyles.overlay} contentClasses={dialogStyles.container}
                          contentProps={{"aria-labelledby": 'login_id', "aria-describedby": 'login_id'}}>
                <div className={dialogStyles.wrapper}>
                    <VisuallyHiddenClient as={'h1'} id={"login_id"}>Log In</VisuallyHiddenClient>
                    <form onSubmit={handleSubmit(handleValidSubmit)}>
                        <div className={dialogStyles.dialogItem}>
                            <VisuallyHiddenClient as={'label'} htmlFor={usernameId}>
                                Username field
                            </VisuallyHiddenClient>
                            <TextField placeholder="Username" id={usernameId} {...register('username')} autoComplete={'username'} />
                            <p>{formState.errors.username?.message}</p>
                        </div>

                        <div className={dialogStyles.dialogItem}>
                            <VisuallyHiddenClient as={'label'} htmlFor={passwordId}>
                                Password field
                            </VisuallyHiddenClient>
                            <TextField placeholder="Password" type={"password"}
                                       id={passwordId} {...register('password')} autoComplete={'current-password'}/>
                            <p>{formState.errors.password?.message}</p>
                        </div>

                        <div className={dialogStyles.dialogItem}>
                            <Button classes={styles.loginButton} type={'submit'}>Sign In</Button>
                        </div>
                    </form>
                    <button className={dialogStyles.close_button} onClick={flip}>
                        <Icon icon={'X'} width={32} height={32}/>
                        <VisuallyHidden>Close Button</VisuallyHidden>
                    </button>

                    {process.env.NODE_ENV !== 'production' && <pre>
                        {JSON.stringify(watch(), null, 2)}
                    </pre>}
                </div>
            </Dialog>}
            <button onClick={flip} className={ConcatClasses(buttonStyles.container, buttonStyles.icon_container)}>
                <span className={ConcatClasses(styles.userprofile, buttonStyles.icon)}>
                    {/*<Icon icon={'User'} />*/}
                    <span>K</span>
                    <VisuallyHiddenClient>
                        Log in
                    </VisuallyHiddenClient>
                </span>

            </button>
        </React.Fragment>
    );
}
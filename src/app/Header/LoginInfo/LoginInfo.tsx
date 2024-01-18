import VisuallyHidden, {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";
import Button from "@/UI/Components/Button";
import React, {useId, useState} from "react";
import {useHasMounted} from "@/CustomHooks/useHasMounted";
import Dialog from "@/UI/Components/Dialog";
import TextField from "@/UI/Components/TextField";
import Icon from "@/UI/Components/Icon";
import {useRouter} from "next/navigation";
import {SubmitHandler, useForm} from "react-hook-form";
import {LoginSchema, TLoginSchema} from "@/app/Header/LoginForm";
import {zodResolver} from "@hookform/resolvers/zod";
import styles from "../styles.module.css"
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {ICON_TOUCHTARGET_CLASS} from "@/UI/Components/TouchTarget";
import {loginStatus, loginUser, logoutUser} from "../../../Helpers/Networking/Authorization";
import dialogStyles from '../dialog.module.css'
import {UserProps} from "@/app/Header";
import {DialogTrigger, OverlayArrow, Popover, Dialog as AriaDialog, Button as AriaButton} from "react-aria-components";
import Card from "@/UI/Components/Card";
import {LogOut} from "react-feather";
import {UserDetails} from "@/app/api/auth/details/route";


export function LoginInfo({user}: UserProps) {
    const hasMounted = useHasMounted();
    const loggedIn = user !== undefined;

    if (!hasMounted) {
        return null
    }

    if (loggedIn) {
        return (
            <LoggedIn email={user!.email}/>
        )
    }

    return (
        <NotLoggedIn/>
    )
}

export function NotLoggedIn() {
    const router = useRouter();
    const id = useId();
    const [showLoginModal, setShowLoginModal] = useState(false);

    const {setError, register, handleSubmit, formState, watch} = useForm<TLoginSchema>({
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

    const handleValidSubmit: SubmitHandler<TLoginSchema> = async ({username, password}: TLoginSchema) => {
        const loginAttempt = await loginUser(username, password);
        console.log(`attempt ${loginAttempt}`);
        if (loginAttempt === loginStatus.ERROR) {
            setError('username', {message: "wrong email or password"})
            return;
        } else {
            router.refresh();
        }
    }

    return (
        <React.Fragment>
            {showLoginModal &&
                <Dialog onClose={flip} overlayClasses={dialogStyles.overlay} contentClasses={dialogStyles.container}
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
                                <div role={'alert'}>
                                    <p className={styles.error}>{formState.errors.username?.message}</p>
                                </div>
                            </div>

                            <div className={dialogStyles.dialogItem}>
                                <VisuallyHiddenClient as={'label'} htmlFor={passwordId}>
                                    Password field
                                </VisuallyHiddenClient>
                                <TextField placeholder="Password" type={"password"} classes={dialogStyles.input}
                                           id={passwordId} {...register('password')} autoComplete={'current-password'}/>
                                <div role={'alert'}>
                                    <p className={styles.error}>{formState.errors.password?.message}</p>
                                </div>
                            </div>

                            <div className={dialogStyles.dialogItem}>
                                <Button classes={dialogStyles.loginButton} buttonType={'filled'} type={'submit'}>Sign
                                    in</Button>
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

function ProfileIcon() {

}

export function LoggedIn({email}: UserDetails) {
    const router = useRouter();
    const firstLetter = email.substring(0, 1).toUpperCase();

    return (
        <DialogTrigger>
            <AriaButton>
                <Button buttonType={'none'} classes={styles.userprofile_button}>
                                <span className={ConcatClasses(styles.userprofile, ICON_TOUCHTARGET_CLASS)}>
                                    <span aria-hidden={"true"}>{firstLetter}</span>
                <VisuallyHiddenClient>
                    User Profile
                </VisuallyHiddenClient>
            </span>
                </Button>
            </AriaButton>

            <Popover placement={'bottom end'}>
                <OverlayArrow/>
                <AriaDialog>
                    <Card classes={styles.userprofile_card}>
                        <div className={styles.userprofile_section}>
                            <div className={styles.userprofile_button}>
                                    <span className={ConcatClasses(styles.userprofile, ICON_TOUCHTARGET_CLASS)}>
                                        <span aria-hidden={"true"}>{firstLetter}</span>
                                    </span>
                            </div>
                            <h1>
                                {email}
                            </h1>
                        </div>

                        <div className={styles.seperator} aria-hidden={"true"}/>

                            <Button buttonType={'text'} classes={ConcatClasses(styles.userprofile_section, styles.logout_button)} onClick={() => {
                                logoutUser();
                                router.refresh();
                            }}>
                                <Icon icon={'LogOut'} color={'var(--color-on-surface)'} fill={'transparent'}/>
                                Log Out
                            </Button>

                    </Card>
                </AriaDialog>
            </Popover>
        </DialogTrigger>

    )
}

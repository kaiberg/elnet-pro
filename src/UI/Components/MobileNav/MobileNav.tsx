import Dialog from "@/UI/Components/Dialog";
import dialogStyles from "@/app/Header/dialog.module.css";
import {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";
import TextField from "@/UI/Components/TextField/TextField";
import Icon from "@/UI/Components/Icon";
import React from "react";

export type DialogProps = {
    children: React.ReactElement;
    onClose: () => void
}

export default function MobileNav({children, ...props}: DialogProps) {
    return (
        <Dialog {...props}>
            {children}
        </Dialog>
    )
}

// {s && <Dialog onClose={flip} overlayClasses={dialogStyles.overlay} contentClasses={dialogStyles.container} contentProps={{role: 'dialog', "aria-labelledby": 'login_id', "aria-describedby": 'login_id', "aria-modal": "true"}}>
//     <>
//         <h1 id={"login_id"}>Log In</h1>
//         <div>
//             <div>
//                 <VisuallyHiddenClient as={'label'} props={{htmlFor: usernameId}}>
//                     Username field
//                 </VisuallyHiddenClient>
//                 <TextField placeholder="Username" id={usernameId} />
//             </div>
//
//             <div>
//                 <VisuallyHiddenClient as={'label'} props={{htmlFor: passwordId}}>
//                     Password field
//                 </VisuallyHiddenClient>
//                 <TextField placeholder="Password" type={"password"} id={passwordId} />
//             </div>
//
//             <button>Sign In</button>
//         </div>
//         <button className={dialogStyles.close_button} onClick={flip}>
//             <Icon icon={'X'} width={32} height={32} />
//         </button>
//         <VisuallyHiddenClient>
//             Close Button
//         </VisuallyHiddenClient>
//     </>
// </Dialog>}
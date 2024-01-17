import Card from "@/UI/Components/Card";
import {HEADLINE_MEDIUM} from "@/UI/Tokens/Typography";
import globalStyles from "@/app/styles.module.css";
import styles from "./styles.module.css";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";

export default function NotLoggedIn() {
    return (
        <div className={globalStyles.maxwidth_wrapper}>
            <div className={styles.container}>
                <Card classes={styles.card}>
                   <h1 className={ConcatClasses(HEADLINE_MEDIUM, styles.title)}>Not logged in.</h1>
                    <p>please log in to access this content.</p>
                </Card>
            </div>

        </div>
    )
}
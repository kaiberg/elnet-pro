import Articles, {ArticlesProps} from "@/UI/Components/Articles";
import styles from './styles.module.css'
import {Metadata} from "next";
import Link from "next/link";

const title = 'Privacy Policy';

export const metadata: Metadata = {
    title,
    description: 'information regarding all privacy policies incorporated with the use of Elnet Pro.',
}

const PrivacyArticles : ArticlesProps['articles'] = [
    {
      title: 'Policy overview',
      content: <p>
          This website uses only necessary cookies that are crucial for the
          proper operation of the website and are not used for any other purposes – or by any other organisation
          – than listed herein.
      </p>
    },
    {
        title: 'All the cookies we use',
        content: <>
            <ol className={styles.list}>
                <li><strong>data-color-mode</strong> is created when you choose a dark mode preference</li>
                <li><strong>auth</strong>(expires after 30 minutes) is created when you login</li>
            </ol>
            <p>
                This cookie policy is subject to periodic updates, so we recommend checking back regularly for any changes.
                For any inquiries regarding this cookie policy, please see contact information in our <Link href={'/contact'} className={styles.link}>Contact page</Link>
            </p>
        </>
    }
]

function Page() {
    return (
        <Articles articles={PrivacyArticles} pageTitle={title}/>
    )
}

export default Page;
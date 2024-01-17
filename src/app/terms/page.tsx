import Articles, {ArticlesProps} from "@/UI/Components/Articles";
import {Metadata} from "next";

const title = 'Terms of service';

export const metadata: Metadata = {
    title,
    description: 'information regarding all the terms of service with the use of Elnet Pro.',
}

const TermsArticles : ArticlesProps['articles'] = [
    {
      content: <p>
          By using or paying for Ewii{'\''}s Elnet Proservice, you agree to these terms. Any material changes to these terms will be notified via a prominent notice on mullvad.net/blog at least one month before the changes are applied. If you wish to exercise your right to reject such changes, you should stop using the service (for refunds, see below).
      </p>
    },
    {
        title: 'The service',
        content: <p>
                This cookie policy is subject to periodic updates, so we recommend checking back regularly for any changes.
                For any inquiries regarding this cookie policy, please see contact information in our Privacy Policy.
        </p>
    },
    {
        title: 'The service',
        content: <p>
            This cookie policy is subject to periodic updates, so we recommend checking back regularly for any changes.
            For any inquiries regarding this cookie policy, please see contact information in our Privacy Policy.
        </p>
    },
    {
        title: 'The service',
        content: <p>
            This cookie policy is subject to periodic updates, so we recommend checking back regularly for any changes.
            For any inquiries regarding this cookie policy, please see contact information in our Privacy Policy.
        </p>
    },
    {
        title: 'The service',
        content: <p>
            This cookie policy is subject to periodic updates, so we recommend checking back regularly for any changes.
            For any inquiries regarding this cookie policy, please see contact information in our Privacy Policy.
        </p>
    },
]

function Page() {
    return (
        <Articles articles={TermsArticles} pageTitle={title}/>
    )
}

export default Page;
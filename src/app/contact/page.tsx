import Articles, {ArticlesProps, LinkStyle} from "@/UI/Components/Articles";
import {Metadata} from "next";
import Link from "next/link";

const title = 'Contact information'

export const metadata: Metadata = {
    title,
    description: 'information regarding contacting Elnet pro\'s team',
}

const ContactArticles : ArticlesProps['articles'] = [
    {
      content: <p>
          By using or paying for Ewii{'\''}s Elnet Proservice, you agree to these terms. Any material changes to these terms will be notified via a prominent notice on mullvad.net/blog at least one month before the changes are applied. If you wish to exercise your right to reject such changes, you should stop using the service (for refunds, see below).
          {' '}<Link className={LinkStyle} href="mailto:support@elnetpro.com">support@elnetpro.com</Link>
      </p>
    },
]

function Page() {
    return (
        <Articles articles={ContactArticles} pageTitle={title}/>
    )
}

export default Page;
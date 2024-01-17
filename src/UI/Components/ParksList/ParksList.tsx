import {getLatestParks, getParks, Park} from "@/UI/Components/Parks";
import globalStyles from "@/app/styles.module.css"
import React, {Suspense} from "react";
import Icon from "@/UI/Components/Icon";
import {OperationalStatus} from "@/UI/Components/Parks";
import styles from './styles.module.css'
import Card from "@/UI/Components/Card";
import {HEADLINE_MEDIUM, TITLE_MEDIUM} from "@/UI/Tokens/Typography";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {clamp, range} from "lodash";

type ParksListProps = {
    title?: string
    type?: 'latest' | 'all',
    loadingCards: number
}

const statusToIcon: { [key in OperationalStatus]: React.ReactNode } = {
    Operational: <span className={ConcatClasses(styles.status, styles.successs)}>
        Operational <Icon icon={'CheckCircle'} fill={'transparent'}/>
    </span>,
    Warning: <span className={ConcatClasses(styles.status, styles.alert)}>
        Alert <Icon icon={'AlertCircle'} fill={'transparent'}/>
    </span>,
    Error: <span className={ConcatClasses(styles.status, styles.error)}>
        Error <Icon icon={'MinusCircle'} fill={'transparent'}/>
        </span>
}

function Parks(props: ParksListProps) {
    return (
        <div className={globalStyles.maxwidth_wrapper}>

            <ParksWrapper {...props}>
                <Suspense fallback={<ExampleCards {...props}/>}>
                    <ParksList {...props}/>
                </Suspense>
            </ParksWrapper>

        </div>
    )
}

function ParksWrapper({title, loadingCards, children}: ParksListProps & { children: React.ReactNode }) {
    return (
        <>
            <h1 className={ConcatClasses(HEADLINE_MEDIUM, styles.title)}>{title}</h1>
            <div className={styles.wrapper}>
                {children}
            </div>
        </>
    )
}

async function ParksList({title = 'Parks', type = 'all'}: ParksListProps) {
    const parks = await (type === 'latest' ? getLatestParks() : getParks());

    return (
        <>
            {parks.map(props => (
                <ParkCard key={props.id} {...props}/>
            ))}
        </>

    )
}

function ExampleCards({loadingCards = 5}: ParksListProps) {
    loadingCards = clamp(loadingCards, 0, 50);

    return (
        range(0, loadingCards, 1).map(value => (
                <Card key={value} classes={ConcatClasses(styles.item)}>
                    <div className={styles.Loading}>
                        <div className={ConcatClasses(styles.itemTitle, styles.itemTitleLoading)}>
                            <h2 className={ConcatClasses(TITLE_MEDIUM, styles.titleLoading)}></h2>
                            <div className={styles.statusLoading}>
                            </div>
                        </div>
                        <div className={styles.descLoading}>
                            <div/>
                            <div/>
                        </div>
                    </div>
                </Card>
            )
        )
    )
}

function ParkCard({id, name, description, status}: Park) {
    return (
        <Card classes={ConcatClasses(styles.item)}>
            <a href={`/parks/${id}`}>
                <div className={ConcatClasses(styles.itemTitle)}>
                    <h2 className={ConcatClasses(TITLE_MEDIUM)}>{name}</h2>
                    {statusToIcon[status]}
                </div>
                {description}
            </a>
        </Card>
    )
}

export default Parks
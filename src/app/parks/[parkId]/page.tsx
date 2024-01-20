import React from "react";

import {Metadata, ResolvingMetadata} from "next";
import {ParkIdClient} from "@/app/parks/[parkId]/client";
import {getPark, getParkData} from "@/Helpers/Networking/Parks";
import Link from "next/link";
import styles from "@/app/parks/[parkId]/styles.module.css";
import globalStyles from "@/app/styles.module.css"
import {HEADLINE_LARGE, HEADLINE_MEDIUM} from "@/UI/Tokens/Typography";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {statusToIcon} from "@/UI/Components/ParksList/ParksList";
import {Park} from "@/UI/Components/Parks";

export enum preDefinedKeys {
    hour = '1h',
    fourHours = '4h',
    day = '24h',
    week = '7d',
    month = '30d'
}

// 5 Minutes -> 5 * 60
export const revalidate = 300

export type PageParams = {
    params: {
        parkId: string
    }
    searchParams: {
        time: string
    }
}

export async function generateMetadata(
    { params, searchParams }: PageParams,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = params.parkId
    const park = await getPark(id);

    let time = searchParams.time ?? '24h';
    const split = time.split('_');
    if(split.length === 2) time = split.join(' ')

    return {
        title: `${park?.name} - ${time}` ?? 'Park not found',
    }
}

async function Page(PageParams: PageParams) {
    const {params: {parkId}, searchParams: {time}} = PageParams;
    const parkInfo = await getPark(parkId);

    if(parkInfo === undefined)
        return (
            <div className={ConcatClasses(globalStyles.maxwidth_wrapper, styles.not_found_container)}>
                <h1 className={HEADLINE_MEDIUM}>Not Found</h1>
                <p className={styles.not_found_desc}>This park could not be found.</p>
                <Link href={'/'} className={styles.go_back}>Go back home</Link>
            </div>
        )

    return <PageData {...PageParams} parkInfo={parkInfo} />
}

async function PageData(PageParams: PageParams & { parkInfo: Park}) {
    const parkInfo = PageParams.parkInfo;
    const time = PageParams.searchParams.time;
    const interval = !time ? '24h' : time

    console.log(`iv ${interval}`)
    const parkData = await getParkData(parkInfo.id, interval);

    return (
        <div className={globalStyles.maxwidth_wrapper} id={process.env.skipToContentHref}>
            <div className={styles.parkInfoContainer}>
                <h1 className={HEADLINE_LARGE}>{parkInfo.name}</h1>
                <p>{parkInfo.description}</p>
                <p>{statusToIcon[parkInfo.status]}</p>
            </div>
            <ParkIdClient {...PageParams} parkData={parkData}/>
        </div>
    )
}

export default Page;
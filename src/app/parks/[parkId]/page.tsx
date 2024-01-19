import React from "react";

import {Metadata, ResolvingMetadata} from "next";
import {ParkIdClient} from "@/app/parks/[parkId]/client";
import {getPark} from "@/Helpers/Networking/Parks";
import Link from "next/link";
import styles from "@/app/parks/[parkId]/styles.module.css";
import globalStyles from "@/app/styles.module.css"
import {HEADLINE_MEDIUM} from "@/UI/Tokens/Typography";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";

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
    return {
        title: `${park?.name} - ${searchParams.time ?? '24h'}` ?? 'Park not found',
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

    return <ParkIdClient {...PageParams} parkInfo={parkInfo} />
}

export default Page;
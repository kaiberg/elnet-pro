'use server'

import {cookies, headers} from "next/headers";
import {Park} from "@/UI/Components/Parks/ParksTypes";
import {revalidatePath} from "next/cache";
import {baseURL} from "@/Helpers/Networking/global";
import {Datapoint, Occurrences} from "@/app/api/parks/[parkId]/[interval]/ParkDataTypes";
import {ParkDataErrors} from "@/Helpers/Networking/Parks/index";

export async function refreshParkData() {
    const headersList = headers();
    const path = headersList.get('Next-Url');
    if(path) {
        revalidatePath(path, 'page');
        console.log(`reavalidated park with path ${path}`);
    }
}

export async function getLatestParks() : Promise<Park[] | undefined> {
    const Cookie = cookies().toString();
    const response = await fetch(`${baseURL}/api/parks/latest`, {
        headers: { Cookie },
        cache: 'force-cache'
    })

    const json = await response.json();
    if(json.ok)
        return json.parks as Park[];
    return undefined
}

export async function getParks() {
    const Cookie = cookies().toString();
    const response = await fetch(`${baseURL}/api/parks`, {
        headers: { Cookie },
        cache: 'force-cache'
    })

    const json = await response.json();
    if(json.ok)
        return json.parks as Park[];
    return undefined
}

export async function getPark(parkId: string) : Promise<Park | undefined> {
    if(!parkId.length)
        return undefined;
    const Cookie = cookies().toString();
    const response = await fetch(`${baseURL}/api/parks/${parkId}`, {
        headers: { Cookie}, cache: "force-cache" }
    );
    const json = await response.json();

    if(json.ok === false)
        return undefined;
    return json.park as Park;
}

export async function getParkData(parkId: string, interval: string) : Promise<{data: Datapoint[], occurrences: Occurrences} | ParkDataErrors> {
    if(!parkId.length || !interval.length)
        return ParkDataErrors.noData;
    const Cookie = cookies().toString();
    const response = await fetch(`${baseURL}/api/parks/${parkId}/${interval}`, {
        headers: { Cookie }, cache: "force-cache"
    })

    const json = await response.json();
    if(!json.ok)
        return json.message === 'bad interval' ? ParkDataErrors.badInterval : ParkDataErrors.noData;
    if(Array.isArray(json.data) && !json.data.length)
        return ParkDataErrors.noData;
    return {data: json.data, occurrences: json.occurrences};
}
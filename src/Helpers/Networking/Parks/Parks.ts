'use server'

import {cookies, headers} from "next/headers";
import {cache} from "react"
import {Delay} from "@/Helpers/Networking/Delay";
import {OperationalStatus, Park} from "@/UI/Components/Parks/ParksTypes";
import {revalidatePath} from "next/cache";
import {baseURL} from "@/Helpers/Networking/global";

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
    const response = await fetch(`${baseURL}/api/parks/${parkId}`, { headers: { Cookie} });
    const json = await response.json();

    if(json.ok === false)
        return undefined;
    return json.park as Park;
}
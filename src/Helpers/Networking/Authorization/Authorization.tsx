'use server'

import {cookies, headers} from "next/headers";
import {cache} from "react"
import {loginStatus} from "@/Helpers/Networking/Authorization/index";
import {UserDetails} from "@/app/api/auth/details/route";
import {json} from "node:stream/consumers";
import {baseURL} from "@/Helpers/Networking/global";

const cookieName = 'auth';

export async function loginUser(username: string, password: string) : Promise<loginStatus> {
    const token = await postLogin(username, password);

    if(token !== undefined) {
        const hourFromNow = Date.now() + 60 * 60 * 1000;
        cookies().set(cookieName, token, {
            expires: hourFromNow, httpOnly: true, sameSite: "strict", secure: true
        })

        return loginStatus.SUCCESS;
    }

    return loginStatus.ERROR;
}


async function postLogin(username: string, password: string) : Promise<string | undefined> {
    const request = await fetch(`${baseURL}/api/auth/login`, {
        method: "POST",
        body: JSON.stringify({username, password}),
        cache: 'no-store'
    })

    const json = await request.json();
    if(json.ok === false)
        return undefined;
    if('auth' in json && typeof json.auth === 'string')
        return json.auth;
    return undefined;
}

export async function logoutUser() {
    cookies().delete(cookieName);
}

async function getUserDetails() : Promise<UserDetails | undefined> {
    if(cookies().get(cookieName)?.value === undefined)
        return undefined;
    const request = await fetch(`${baseURL}/api/auth/details`, {
        method: "GET",
        headers: {Cookie: cookies().toString()},
    })

    const json = await request.json();
    if(json.ok === false)
        return undefined;
    if('email' in json && typeof json.email === 'string')
        return {email: json.email};
    return undefined;
}

export default getUserDetails;
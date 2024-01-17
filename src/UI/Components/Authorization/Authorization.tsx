'use server'

import {cookies} from "next/headers";
import {cache} from "react"

export async function loginUser(username: string, password: string) {
    const token = await postLogin(username, password);

    if(token !== undefined) {
        const hourFromNow = Date.now() + 60 * 60 * 1000;
        cookies().set('token', token, {
            expires: hourFromNow, httpOnly: true, sameSite: "strict", secure: true
        })
    }
}


function postLogin(username: string, password: string) : string | undefined {
    return '';
}

export async function logoutUser() {
    cookies().delete('token');
}

export async function getUserDetails() {
    const token = cookies().get('token')?.value
    return getUser(token);
}

type UserDetails = {

}

const getUser = cache(async (token : string | undefined) : Promise<UserDetails | undefined> => {
    if(typeof token !== "string")
        return undefined;

    // return  response = await fetch({}, '')
    return "";
})

export default getUserDetails();
'use server'

import {cookies} from "next/headers";
import {cache} from "react"

export async function logoutUser() {
    cookies().delete('token');
}

export async function getUserDetails() {
    const token = cookies().get('token')?.value
    return getUser(token);
}

const getUser = cache(async (token : string | undefined) => {
    if(typeof token !== "string")
        return undefined;

    // return  response = await fetch({}, '')
    return "";
})

export default getUserDetails();
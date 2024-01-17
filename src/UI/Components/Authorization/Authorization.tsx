'use server'

import {cookies} from "next/headers";
import {cache} from "react"
import {loginStatus} from "@/UI/Components/Authorization/index";

export async function loginUser(username: string, password: string) : Promise<loginStatus> {
    const token = await postLogin(username, password);

    if(token !== undefined) {
        const hourFromNow = Date.now() + 60 * 60 * 1000;
        cookies().set('token', token, {
            expires: hourFromNow, httpOnly: true, sameSite: "strict", secure: true
        })

        return loginStatus.SUCCESS;
    }

    return loginStatus.ERROR;
}

const exampleAdmin = { username: 'admin@elnet.dk', password: 'Password123' }

function postLogin(username: string, password: string) : string | undefined {
    if(username === exampleAdmin.username && password === exampleAdmin.password)
        return exampleToken;
    return undefined;
}

export async function logoutUser() {
    cookies().delete('token');
}

async function getUserDetails() {
    const token = cookies().get('token')?.value
    return getUser(token);
}

export type UserDetails = {
    email: string
}

const exampleToken = 'EyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlF1aW5jeSBMYXJzb24iLCJpYXQiOjE1MTYyMzkwMj'

const getUser = cache(async (token : string | undefined) : Promise<UserDetails | undefined> => {
    if(typeof token !== "string")
        return undefined;

    // return  response = await fetch({}, '')
    return { email: exampleAdmin.username};
})

export default getUserDetails;
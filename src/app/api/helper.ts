'use server'

import {NextResponse} from "next/server";
import {cookies} from "next/headers";
import {exampleToken} from "@/app/api/values";

export async function isTokenValid() : Promise<NextResponse | true> {
    const token = cookies().get('auth')?.value;
    console.log(`attempted request with token ${token}`)
    if(!token)
        return NextResponse.json({
            ok: false,
            message: 'auth required'
        })
    if(token !== exampleToken)
        return NextResponse.json({
            ok: false,
            message: 'auth invalid'
        })

    return true;
}
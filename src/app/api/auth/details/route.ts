import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {isTokenValid} from "@/app/api/helper";
import {exampleAdmin} from "@/app/api/values";

export type UserDetails = {
    email: string
}

export async function GET(request: NextRequest) {
    const auth = await isTokenValid();
    if(typeof auth !== "boolean")
        return auth;

    console.log('valid login')
    return NextResponse.json({ok : true, email: exampleAdmin.username})
}
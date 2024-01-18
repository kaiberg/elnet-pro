import {NextRequest, NextResponse} from "next/server";
import {token} from "stylis";
import {LoginSchema, TLoginSchema} from "@/app/Header/LoginForm";
import {loginStatus} from "@/Helpers/Networking/Authorization";
import {cookies} from "next/headers";
import {exampleAdmin, exampleToken} from "@/app/api/values";

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body);
    const {success} = LoginSchema.safeParse(body);
    if(!success) {
        return NextResponse.json({
            ok: false,
            message: 'username and password is required'
        })
    }

    const details = LoginSchema.parse(body);
    if(details.username === exampleAdmin.username && details.password === exampleAdmin.password)
        return NextResponse.json({
            ok: true,
            auth: exampleToken
        })

    return NextResponse.json({
        ok: false,
        message: "Unknown error."
    })
}
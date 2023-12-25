'use server'

import {cookies} from "next/headers";
import {DarkModeVariableName} from "@/UI/Tokens/Theme/constants";

export async function setDarkModeCookie(preference: 'light' | 'dark') {
    const ThousandDaysLater = Date.now() + 1000 * 24 * 60 * 60 * 1000;
    cookies().set(DarkModeVariableName, preference, {expires: ThousandDaysLater});
}
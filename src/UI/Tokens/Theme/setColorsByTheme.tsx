import Script from "next/script";
import cookies from "js-cookie";
import {setDarkModeCookie} from "@/UI/Tokens/Theme/actions";
import {DarkModeVariableName} from "@/UI/Tokens/Theme/constants";

export function getInitialTheme() : string | undefined {
    const cookiesPreference = cookies.get(DarkModeVariableName);
    let colorMode: 'light' | 'dark' | undefined;

    const hasUsedToggle = typeof cookiesPreference === 'string';

    if (hasUsedToggle && (cookiesPreference === "dark" || cookiesPreference === "light"))
            colorMode = cookiesPreference;

    console.log(colorMode);
    return colorMode;
}
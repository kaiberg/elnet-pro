'use client'
import React from "react";
import {COLORS, ColorTypes, DarkModeVariableName} from "@/UI/Tokens/Theme/constants";
import {setDarkModeCookie} from "@/UI/Tokens/Theme/actions";
import {getInitialTheme} from "@/UI/Tokens/Theme/setColorsByTheme";
import cookies from "js-cookie";

export type ThemeContextValue = { colorMode: string | undefined; setColorMode: (value: ColorTypes) => void; }
export const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

type props = {
    children: React.ReactNode
}

export default function ThemContextProvider({children} : props) {
    const [colorMode, setRawColorMode] = React.useState<string | undefined>(cookies.get(DarkModeVariableName));
    
    React.useEffect(() => {
        const {documentElement} = window.document;
        if(!documentElement.getAttribute(DarkModeVariableName)) {
            const prefersDarkMediaQuery = window.matchMedia('prefers-color-scheme: dark');
            setColorMode(prefersDarkMediaQuery ? 'dark' : 'light');
        }
    }, [])

    function setColorMode(value: string) {
        const {documentElement} = window.document;
        setRawColorMode(value);
        if(value === 'light' || value === 'dark') {
            console.log(`setColorMode changing theme to ${value}`)
            setDarkModeCookie(value);
            documentElement.setAttribute(DarkModeVariableName, value);
        }
    }
    
    const ProviderValue = React.useMemo(() => {
        return {colorMode, setColorMode};
    }, [colorMode])

    return <ThemeContext.Provider value={ProviderValue}>
        {children}
    </ThemeContext.Provider>
}
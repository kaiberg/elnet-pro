'use client'
import React from "react";
import {COLORS, ColorTypes, KEYS} from "@/UI/Tokens/Theme/constants";
import {setRootColors} from "@/UI/Tokens/Theme/setColorsByTheme";
// export * from './constants';

export type ThemeContextValue = { colorMode: string | undefined; setColorMode: (value: ColorTypes) => void; }
export const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

type props = {
    children: React.ReactNode
}

export default function ThemContextProvider({children} : props) {
    const [colorMode, setRawColorMode] = React.useState<undefined | string>(undefined);
    
    React.useEffect(() => {
        const {documentElement, body} = window.document;

        body.style.setProperty("transition", "color var(--animation-duration-medium3) ease 0s, background var(--animation-duration-medium3) ease 0s");
        const initialSyle = documentElement.style.getPropertyValue(KEYS.INITIAL_COLOR_MODE_CSS_PROP);
        setRawColorMode(initialSyle);
    }, [])

    function setColorMode(value: string) {
        const {documentElement} = window.document;
        setRawColorMode(value);
        console.log(value, KEYS.COLOR_MODE_KEY);
        window.localStorage.setItem(KEYS.COLOR_MODE_KEY, value);

        setRootColors(COLORS, value, documentElement);
    }
    
    const ProviderValue = React.useMemo(() => {
        return {colorMode, setColorMode};
    }, [colorMode])

    return <ThemeContext.Provider value={ProviderValue}>
        {children}
    </ThemeContext.Provider>
}
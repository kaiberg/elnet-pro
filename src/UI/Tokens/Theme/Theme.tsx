'use client'
import React from "react";
import { KEYS, COLORS } from "./constants";
import { setRootColors } from "./setColorsByTheme";

export const ThemeContext = React.createContext<{ colorMode: string | undefined; setColorMode: (value: string) => void; } | undefined>(undefined);

type props = {
    children: React.ReactNode
}

export function ThemContextProvider({children} : props) {
    const [colorMode, setRawColorMode] = React.useState<undefined | string>(undefined);
    
    React.useEffect(() => {
        const {documentElement, body} = window.document;

        body.style.setProperty("transition", "color 350ms ease 0s, background 350ms ease 0s");
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

    return <ThemeContext.Provider value={{colorMode, setColorMode}}>
        {children}
    </ThemeContext.Provider>
}
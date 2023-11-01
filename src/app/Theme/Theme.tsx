import React from "react";

export const ThemeContext = React.createContext<undefined>(undefined);

type props = {
    children: React.ReactNode
}

export function ThemContextProvider({children} : props) {
    const [colorMode, setRawColorMode] = React.useState<undefined | string>(undefined);

    React.useEffect(() => {
        const {documentElement} = window.document;

        const initialSyle = documentElement.style.getPropertyValue('--init-color');

        setRawColorMode(initialSyle);
    }, [])

    function setColorMode(value: string) {
        const {documentElement} = window.document;
        const {setItem} = window.localStorage;

        setRawColorMode(value);
        setItem('color', value);

        documentElement.style.setProperty('--color-text', value === 'dark' ? 'hsl(0,0,100%)' : 'hsl(0,0,0%)');

    }
}
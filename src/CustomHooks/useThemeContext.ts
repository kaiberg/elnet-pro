import { ThemeContext } from "@/UI/Tokens/Theme/Theme";
import React from 'react';

export function useThemeContext() {
    const context = React.useContext(ThemeContext);

    if(context === undefined) {
        throw new Error("useThemeContext is undefined");
    }

    return context;
}
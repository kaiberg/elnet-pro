import { ThemeContext } from "@/UI/Tokens/Theme";
import React from 'react';

export function useThemeContext() {
    const context = React.useContext(ThemeContext);

    if(context === undefined) {
        throw new Error("useThemeContext is undefined");
    }

    return context;
}
import { useThemeContext } from '@/CustomHooks/useThemeContext';
import { ThemeContext } from '@/UI/Tokens/Theme/Theme';
import React from 'react';

export default function DarkToggle() {
    const { colorMode, setColorMode } = useThemeContext();

    if (colorMode === undefined) {
        return null;
    }

    return (
        <button onClick={() => {
            setColorMode(colorMode === "dark" ? "light" : "dark");
        }}>toggle</button>
    )
}
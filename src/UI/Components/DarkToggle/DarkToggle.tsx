import {useThemeContext} from '@/CustomHooks/useThemeContext';
import React, {ComponentPropsWithoutRef, FC} from 'react';
import {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";
import styles from './styles.module.css'
import {IconProps} from "react-feather";
import Icon from "@/UI/Components/Icon";
import {ThemeContextValue} from "@/UI/Tokens/Theme";
import {colorVariants} from "@/UI/Tokens/Theme/constants";
import buttonStyles from '@/UI/Components/TouchTarget';
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";

export type props = {
    iconProps?: FC<IconProps>
} & ComponentPropsWithoutRef<'button'>

export default function DarkToggle({...props}: props) {
    const themeProps = useThemeContext();

    if (themeProps.colorMode === undefined) {
        return null;
    }

    return (
        <DarkToggleNotNull {...themeProps} {...props}/>
    )
}

function DarkToggleNotNull({colorMode, setColorMode, iconProps, ...buttonProps}: props & ThemeContextValue) {
    const { light, dark } = colorVariants;
    const isDarkMode = React.useMemo(() => {
        return colorMode === dark
    }, [colorMode, dark])

    const icon = (isDarkMode) ? 'Sun' : 'Moon';

    return (
        <button className={ConcatClasses(buttonStyles.container, buttonStyles.icon_container)} {...buttonProps} onClick={() => {
            setColorMode(isDarkMode ? light : dark);
        }}>
            <Icon icon={icon} className={styles.logo} width={process.env.iconSize} height={process.env.iconSize} strokeWidth={1.5} {...iconProps}/>
            <VisuallyHiddenClient>Toggle {isDarkMode ? light : dark} mode</VisuallyHiddenClient>
        </button>
    )
}
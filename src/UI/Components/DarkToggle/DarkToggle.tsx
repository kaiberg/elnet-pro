import {useThemeContext} from '@/CustomHooks/useThemeContext';
import React, {FC} from 'react';
import {VisuallyHiddenClient} from "@/UI/Components/VisuallyHidden";
import styles from './styles.module.css'
import {IconProps} from "react-feather";
import Icon from "@/UI/Components/Icon";
import {ThemeContextValue} from "@/UI/Tokens/Theme";
import {colorVariants} from "@/UI/Tokens/Theme/constants";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import Button, {ButtonProps} from "@/UI/Components/Button";
import {useHasMounted} from "@/CustomHooks/useHasMounted";

export type props = {
    iconProps?: FC<IconProps>
} & Omit<ButtonProps<'button'>, 'children'>

export default function DarkToggle({...props}: props) {
    const hasMounted = useHasMounted();
    const themeProps = useThemeContext();

    if (!hasMounted || themeProps.colorMode === undefined) {
        return null;
    }

    return (
        <DarkToggleNotNull {...themeProps} {...props}/>
    )
}

function DarkToggleNotNull({colorMode, setColorMode, iconProps, classes, ...buttonProps}: props & ThemeContextValue) {
    const { light, dark } = colorVariants;
    const isDarkMode = React.useMemo(() => {
        return colorMode === dark
    }, [colorMode, dark])

    const icon = (isDarkMode) ? 'Sun' : 'Moon';
    const opposite = (isDarkMode) ? light : dark

    return (
        <Button classes={ConcatClasses(styles.button, classes)} {...buttonProps} onClick={() => {
            setColorMode(opposite);
        }}>
            <Icon icon={icon} className={styles.logo} width={process.env.iconSize} height={process.env.iconSize} strokeWidth={1.5} {...iconProps}/>
            <VisuallyHiddenClient>Toggle{' '}{opposite}{' '}mode</VisuallyHiddenClient>
        </Button>
    )
}
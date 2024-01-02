import React from "react";
import * as Select from "@radix-ui/react-select";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import exp from "constants";
import Icon from "@/UI/Components/Icon";
import {SelectItemProps} from "@radix-ui/react-select";
import styles from "./styles.module.css";

type option = [string,string]

export type SelectProps = {
    options: option[][]
    value: string,
    onValueChange: (newValue: string) => void
    triggerStyles?: string | undefined
}

function SelectMenu({options, value, onValueChange, triggerStyles, ...props} : SelectProps) {
    return (
        <Select.Root value={value} onValueChange={onValueChange}>
            <Select.Trigger className={ConcatClasses(styles.trigger, triggerStyles)} aria-label="Select Time period">
                <Select.Value>
                    {value}
                </Select.Value>
                <Select.Icon className="SelectIcon">
                    <Icon icon={'ChevronDown'} fill={'transparent'}/>
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content className={styles.portal}>
                    <Select.ScrollUpButton className={styles.scroll_button}>
                        <Icon icon={'ChevronsUp'} fill={'transparent'}/>
                    </Select.ScrollUpButton>
                    <Select.Viewport className={styles.viewport}>
                        {options.map(((optionsList, ix) => {
                            return (
                                <React.Fragment key={crypto.randomUUID()}>
                                    {
                                        optionsList.map(([value, text]) => (
                                            <SelectItem key={crypto.randomUUID()} value={value}>{text}</SelectItem>
                                        ))
                                    }
                                    {ix % 2 === 0 && optionsList.length > ix + 1 && <Select.Separator className={styles.separator}/>}
                                </React.Fragment>
                            )
                        }))}
                    </Select.Viewport>
                    <Select.ScrollDownButton className={styles.scroll_button}>
                        <Icon icon={'ChevronDown'} fill={'transparent'}/>
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}

// eslint-disable-next-line react/display-name
const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(({
                                                                          children,
                                                                          className,
                                                                          ...props
                                                                      }, forwardedRef) => {
    return (
        <Select.Item className={ConcatClasses(styles.selectItem, className)} {...props} ref={forwardedRef}>
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className={styles.selectItemIc}>
                <Icon icon={"Check"} fill={'transparent'} color={'var(--color-primary)'} width={'18'} height={'18'}/>
            </Select.ItemIndicator>
        </Select.Item>
    );
});

export default SelectMenu;
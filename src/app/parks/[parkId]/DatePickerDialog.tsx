import React from "react";
import Dialog from "@/UI/Components/Dialog";
import styles from './DatePicker.module.css';
import {Button as AriaButton, CalendarCell, CalendarGrid, DateInput, DateRangePicker, DateSegment, Dialog as AriaDialog, Group, Heading, Label, Popover, RangeCalendar} from 'react-aria-components';
import {z} from 'zod'
import Button from "@/UI/Components/Button";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {parseDate} from "@internationalized/date";

type TimepickerProps = {
    onClose: () => void,
    onSubmit: (startDate : string, endDate : string) => void
}


export const TimePickerSchema = z.object({
    start: z.string({required_error: 'Start time is required'}),
    end: z.string({required_error: 'End time is required'})
})
    .refine(({start,end}) => {
    return start > end;
}, {
    message: 'Start must be before end',
    path: ['start']
})
    .refine(({start,end}) => {
        return start > end;
    }, {
        message: 'Range can\'t be more than a year',
        path: ['start']
    })
    .refine(({start,end}) => {
        return start > end;
    }, {
        message: 'Range must be more than a day',
        path: ['start']
    })

export type TTimePickerSchema = z.infer<typeof TimePickerSchema>;

function TimePicker({onClose, onSubmit} : TimepickerProps) {
    let [value, setValue] = React.useState({
        start: parseDate('2020-02-03'),
        end: parseDate('2020-02-08')
    });

    const [error,setError] = React.useState<string | null>(null);

    return (
        <Dialog contentClasses={ConcatClasses(styles.dialog, styles.container)} overlayClasses={styles.overlay} onClose={onClose}>
            <form onSubmit={(e) => {
                e.preventDefault();

                setError(null);

                const start = value.start.toString();
                const end = value.end.toString();
                console.log(start,end)
                try {
                    TimePickerSchema.parse({
                        start, end
                    });
                } catch (err) {
                    if (err instanceof z.ZodError) {
                        console.log(err.issues);
                        setError(err.issues[0].message);
                    }
                }
            }}>
                <DateRangePicker className={styles.reactAriaDateRangePicker} onChange={(e) => {
                    const {start,end} = e;
                    setValue({start,end});
                }} value={value}>
                    <Label>Trip dates</Label>
                    <Group className={styles.reactAriaGroup}>
                        <DateInput slot="start" className={styles.reactAriaDateInput}>
                            {(segment) => <DateSegment segment={segment} />}
                        </DateInput>
                        <span aria-hidden="true">–</span>
                        <DateInput slot="end" className={styles.reactAriaDateInput}>
                            {(segment) => <DateSegment segment={segment} />}
                        </DateInput>
                        <AriaButton className={styles.reactAriaButton}>▼</AriaButton>
                    </Group>

                    <div role={'alert'}>
                        {error !== null && <p>{error}</p>}
                    </div>

                    <Popover className={styles.reactAriaPopover}>
                        <AriaDialog>
                            <RangeCalendar>
                                <header>
                                    <AriaButton slot="previous" className={styles.reactAriaButton}>◀</AriaButton>
                                    <Heading />
                                    <AriaButton slot="next" className={styles.reactAriaButton}>▶</AriaButton>
                                </header>
                                <CalendarGrid>
                                    {(date) => <CalendarCell date={date} />}
                                </CalendarGrid>
                            </RangeCalendar>
                        </AriaDialog>
                    </Popover>
                </DateRangePicker>

                {process.env.NODE_ENV !== 'production' && <pre>
                        {JSON.stringify(value, null, 2)}
                    </pre>}

                <div className={styles.dialogActions}>
                    <Button buttonType={'outlined'} type={'button'} onClick={onClose}>Cancel</Button>
                    <Button buttonType={'outlined'}>Ok</Button>
                </div>
            </form>
        </Dialog>
    )
}




export default TimePicker;
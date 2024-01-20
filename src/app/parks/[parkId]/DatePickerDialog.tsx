import React from "react";
import Dialog from "@/UI/Components/Dialog";
import CalendarStyles from "./Calendar.module.css"
import DatePickerStyles from "./DatePicker.module.css"
import styles from "./styles.module.css"
import {
    Button as AriaButton,
    CalendarCell,
    CalendarGrid,
    DateInput,
    DateRangePicker,
    DateSegment,
    Dialog as AriaDialog,
    Group,
    Heading,
    Label,
    Popover,
    RangeCalendar
} from 'react-aria-components';
import {z} from 'zod'
import Button from "@/UI/Components/Button";
import {ConcatClasses} from "@/Helpers/Formatting/ConcatClasses";
import {parseDate} from "@internationalized/date";
import Icon from "@/UI/Components/Icon";
import dayjs from "dayjs";

type TimepickerProps = {
    onClose: () => void,
    onSubmit: (startDate: string, endDate: string) => void
}

export const TimePickerSchema = z.object({
    start: z.string({required_error: 'Start time is required'}),
    end: z.string({required_error: 'End time is required'})
})
    .refine(({start, end}) => {
        const rangeLessThanYearAgo = dayjs().diff(dayjs(start), 'day') < 365
        return rangeLessThanYearAgo;
    }, {
        message: 'Range can\'t be more than a year ago',
        path: ['start']
    })
    .refine(({start, end}) => {
        const startBeforeEnd = dayjs(start).isBefore(dayjs(end));
        console.log(startBeforeEnd, dayjs(start), dayjs(end))
        return startBeforeEnd;
    }, {
        message: 'Start must be before end',
        path: ['start']
    })
    .refine(({start, end}) => {
        const rangeLessThanYear = dayjs(end).diff(dayjs(start), 'day') < 365
        return rangeLessThanYear;
    }, {
        message: 'Range can\'t be more than a year',
        path: ['start']
    })
    .refine(({start, end}) => {
        const rangeMoreThanOneDay = dayjs(end).diff(dayjs(start), 'date') > 1
        return rangeMoreThanOneDay;
    }, {
        message: 'Range must be more than a day',
        path: ['start']
    })

export type TTimePickerSchema = z.infer<typeof TimePickerSchema>;

function TimePicker({onClose, onSubmit}: TimepickerProps) {
    let [value, setValue] = React.useState({
        start: parseDate(dayjs().add(-7, 'day').format('YYYY-MM-DD')),
        end: parseDate(dayjs().format('YYYY-MM-DD'))
    });

    const [error, setError] = React.useState<string | null>(null);

    return (
        <Dialog contentClasses={ConcatClasses(DatePickerStyles.dialog, DatePickerStyles.container)}
                overlayClasses={DatePickerStyles.overlay} onClose={onClose}>
            <form onSubmit={(e) => {
                e.preventDefault();

                setError(null);

                const start = value.start.toString();
                const end = value.end.toString();
                console.log(start, end)
                try {
                    TimePickerSchema.parse({
                        start, end
                    });
                    onSubmit(start,end);
                } catch (err) {
                    if (err instanceof z.ZodError) {
                        console.log(err.issues[0].message);
                        setError(err.issues[0].message);
                    }
                }
            }}>
                <div className={DatePickerStyles.test}></div>
                <DateRangePicker data-error={error !== null ? 'true' : undefined}
                                 className={DatePickerStyles.picker} onChange={(e) => {
                    if (!e)
                        return;
                    const {start, end} = e;
                    setValue({start, end});
                }} value={value}>
                    <Label>Range</Label>
                    <Group className={DatePickerStyles.group}>
                        <DateInput slot="start" className={DatePickerStyles.dateinput}>
                            {(segment) => <DateSegment segment={segment}/>}
                        </DateInput>
                        <span aria-hidden="true">–</span>
                        <DateInput slot="end" className={DatePickerStyles.dateinput}>
                            {(segment) => <DateSegment segment={segment}/>}
                        </DateInput>
                        <AriaButton className={DatePickerStyles.button}>
                            <Icon icon={'ChevronDown'}/>
                        </AriaButton>
                    </Group>

                    <div role={'alert'}>
                        {error !== null && <p className={DatePickerStyles.error}>{error}</p>}
                    </div>

                    <Popover className={DatePickerStyles.popover}>
                        <AriaDialog>
                            <RangeCalendar className={CalendarStyles.calendar}>
                                <header className={CalendarStyles.header}>
                                    <AriaButton slot="previous" className={CalendarStyles.button}>
                                        <Icon icon={'ChevronLeft'} fill={'transparent'}/>
                                    </AriaButton>
                                    <Heading/>
                                    <AriaButton slot="next" className={CalendarStyles.button}>
                                        <Icon icon={'ChevronRight'} fill={'transparent'}/>
                                    </AriaButton>
                                </header>
                                <CalendarGrid className={CalendarStyles.table}>
                                    {(date) => <CalendarCell className={CalendarStyles.cell} date={date}>
                                        {(values) => <span>{values.formattedDate}</span>}
                                    </CalendarCell>}
                                </CalendarGrid>
                            </RangeCalendar>
                        </AriaDialog>
                    </Popover>
                </DateRangePicker>

                {process.env.NODE_ENV !== 'production' && <pre>
                        {JSON.stringify(value, null, 2)}
                    </pre>}

                <div className={DatePickerStyles.dialogActions}>
                    <Button buttonType={'outlined'} type={'button'} onClick={onClose}>Cancel</Button>
                    <Button buttonType={'outlined'}>Ok</Button>
                </div>
            </form>
        </Dialog>
    )
}


export default TimePicker;
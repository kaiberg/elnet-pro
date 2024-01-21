import {NextRequest, NextResponse} from "next/server";
import {isTokenValid} from "@/app/api/helper";
import {customRangeSeparator, preDefinedKeys} from "@/app/parks/[parkId]/Separator";
import {z} from "zod";
import {TimePickerSchema} from "@/app/parks/[parkId]/DatePickerDialog";
import {Datapoint, Occurrences, WeatherType} from "@/app/api/parks/[parkId]/[interval]/ParkDataTypes";
import dayjs from "dayjs";

type ParkDataProps = {
    params: {
        parkId: string,
        interval: string
    }
}

const ParkData = {
    '3': {},
}

const dataSet = (): Datapoint[] => {

    return [];
}

type DataBody = {
    ok: true,
    data: Datapoint[],
    occurrences: Occurrences
}

export async function GET(request: NextRequest, {params: {parkId, interval}}: ParkDataProps) {
    const isAuthorized = await isTokenValid();
    if (typeof isAuthorized !== 'boolean')
        return isAuthorized;

    if (!validateInterval(interval))
        return NextResponse.json({
            ok: false,
            message: 'bad interval'
        })

    const hasData = parkId in ParkData;
    if (!hasData)
        return NextResponse.json({
            ok: true,
            data: []
        })

    return NextResponse.json<DataBody>({
        ok: true,
        occurrences: [
            {
                weather: WeatherType.SUNNY,
                count: 6
            },
            {
                weather: WeatherType.RAINING,
                count: 12
            },
            {
                weather: WeatherType.PARTLY_CLOUDY,
                count: 156
            },
            {
                weather: WeatherType.CLOUDY,
                count: 6
            }
        ],
        data: [
            {
                time: dayjs().valueOf(),
                parkId,
                temperature: 5,
                skyPercent: 6,
                windSpeed: 5,
                power: 3
            },
            {
                time: dayjs().add(120, 'second').valueOf(),
                parkId,
                temperature: 6,
                skyPercent: 60,
                windSpeed: 5,
                power: 2
            },
            {
                time: dayjs().add(120 * 2, 'second').valueOf(),
                parkId,
                temperature: 7,
                skyPercent: 21,
                windSpeed: 5,
                power: 11
            },
            {
                time: dayjs().add(120 * 3, 'second').valueOf(),
                parkId,
                temperature: 8,
                skyPercent: 33,
                windSpeed: 5,
                power: 20
            },
            {
                time: dayjs().add(120 * 4, 'second').valueOf(),
                parkId,
                temperature: 9,
                skyPercent: 44,
                windSpeed: 5,
                power: 156
            },
            {
                time: dayjs().add(120 * 5, 'second').valueOf(),
                parkId,
                temperature: 10,
                skyPercent: 62,
                windSpeed: 5,
                power: 17
            }
        ]
    })
}

function validateInterval(interval: string): boolean {
    if (Object.values(preDefinedKeys).includes(interval as preDefinedKeys))
        return true

    const split = interval.split(customRangeSeparator);

    if (split.length !== 2)
        return false

    try {
        TimePickerSchema.parse({
            start: split[0], end: split[1]
        });
    } catch (err) {
        if (err instanceof z.ZodError)
            return false
    }

    return true
}
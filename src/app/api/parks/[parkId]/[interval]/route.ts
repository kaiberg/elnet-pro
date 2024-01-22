import {NextRequest, NextResponse} from "next/server";
import {isTokenValid} from "@/app/api/helper";
import {customRangeSeparator, preDefinedKeys} from "@/app/parks/[parkId]/Separator";
import {z} from "zod";
import {TimePickerSchema} from "@/app/parks/[parkId]/DatePickerDialog";
import {Datapoint, Occurrences, WeatherType} from "@/app/api/parks/[parkId]/[interval]/ParkDataTypes";
import dayjs from "dayjs";
import seedrandom from "seedrandom"
import {downsample} from "@/Helpers/Processing/downsample";

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

    const data = generateData(interval);
    return NextResponse.json<DataBody>({
        ok: true,
        occurrences: data.occurrences,
        data: data.data
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

function generateData(interval: string, bucketSize = 1000): Omit<DataBody, 'ok'> {
    const {start, end} = getInterval(interval);
    const {data, occurrences} = getData(start, end);
    return {data: downsample(data, 'time', 'power', 100), occurrences};
}

function getInterval(interval: string): { start: dayjs.Dayjs, end: dayjs.Dayjs } {
    if (Object.values(preDefinedKeys).includes(interval as preDefinedKeys)) {
        return {start: getStartDateFromPredefined(interval), end: dayjs()}
    }

    const fail = {start: dayjs(), end: dayjs()}
    const split = interval.split('_');
    if (split.length !== 2 || !split[0] || !split[1])
        return fail
    const start = dayjs(split[0]), end = dayjs(split[1]);
    if (!start.isValid() || !end.isValid())
        return fail;
    return {start, end}
}

function getStartDateFromPredefined(interval: string): dayjs.Dayjs {
    const day = dayjs();
    switch (interval) {
        case '1h':
            return day.add(-1, 'hour')
        case '4h':
            return day.add(-4, 'hour')
        case '24h':
            return day.add(-1, 'day')
        case '7d':
            return day.add(-7, 'day')
        case '30d':
            return day.add(-30, 'day')
        default:
            return day;
    }
}

function getData(start: dayjs.Dayjs, end: dayjs.Dayjs): Omit<DataBody, 'ok'> {
    const data: DataBody['data'] = [];
    const occurrences: DataBody['occurrences'] = [
        {
            weather: WeatherType.SUNNY,
            count: 0
        },
        {
            weather: WeatherType.RAINING,
            count: 0
        },
        {
            weather: WeatherType.PARTLY_CLOUDY,
            count: 0
        },
        {
            weather: WeatherType.CLOUDY,
            count: 0
        }
    ]

    const rng = seedrandom('elnet pro random seed')

    for (let day = 2; day > 0; day--) {
        const startDate = dayjs().subtract(day, 'day');

        for (let i = 0; i < 1000; i++) {
            const time = startDate.add(i * 120, 'second');
            if(!time.isAfter(start) || !time.isBefore(end)) {
                for (let i = 0; i < 4; i++)
                    rng();
                continue;
            }

            const temperature = Math.floor(rng() * 15) + 5;
            const skyPercent = Math.floor(rng() * 100);
            const windSpeed = Math.floor(rng() * 10);
            let weather;
            if (temperature > 12)
                occurrences[0].count++
            else if (temperature < 8)
                occurrences[1].count++
            else if (skyPercent < 30)
                occurrences[2].count++
            else
                occurrences[3].count++

            const basePower = Math.floor(rng() * 50) + 1;
            const power = weather === WeatherType.SUNNY ? basePower * 3 : basePower;

            const dataPoint = {
                time: time.valueOf(),
                temperature,
                skyPercent,
                windSpeed,
                power
            };

            data.push(dataPoint);
        }
    }

    return {data, occurrences};
}
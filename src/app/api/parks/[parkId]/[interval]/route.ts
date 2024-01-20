import {NextRequest, NextResponse} from "next/server";
import {isTokenValid} from "@/app/api/helper";
import {parkConstants} from "@/app/api/parks/parkConstants";
import {preDefinedKeys} from "@/app/parks/[parkId]/page";
import {customRangeSeparator} from "@/app/parks/[parkId]/Separator";
import {z} from "zod";
import {TimePickerSchema} from "@/app/parks/[parkId]/DatePickerDialog";

type ParkDataProps = {
    params: {
        parkId: string,
        interval: string
    }
}

const ParkData = {
    '3': {},
}

export async function GET(request: NextRequest, { params: {parkId, interval}}: ParkDataProps) {
    const isAuthorized = await isTokenValid();
    if(typeof isAuthorized !== 'boolean')
        return isAuthorized;

    if(!validateInterval(interval))
        return NextResponse.json({
            ok: false,
            message: 'bad interval'
        })

    const hasData = parkId in ParkData;
    if(!hasData)
        return NextResponse.json({
            ok: true,
            data: []
        })

    return NextResponse.json({
        ok: true,
        data: []
    })
}

function validateInterval(interval: string) : boolean {
    if(Object.values(preDefinedKeys).includes(interval as preDefinedKeys))
        return true

    const split = interval.split(customRangeSeparator);

    if(split.length !== 2)
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
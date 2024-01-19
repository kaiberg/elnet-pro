import {NextRequest, NextResponse} from "next/server";
import {isTokenValid} from "@/app/api/helper";
import {parkConstants} from "@/app/api/parks/parkConstants";

type ParkInfoProps = {
    params: {
        parkId: string
    }
}

export async function GET(request: NextRequest, { params: {parkId}}: ParkInfoProps) {
    const isAuthorized = await isTokenValid();
    if(typeof isAuthorized !== 'boolean')
        return isAuthorized;

    const park = parkConstants.find(({id}) => id === parkId);
    console.log(`request park, found this info ${park}`);
    if(park === undefined)
        return NextResponse.json({
            ok: false,
            message: "park does not exist"
        })

    return NextResponse.json({
        ok: true,
        park
    });
}
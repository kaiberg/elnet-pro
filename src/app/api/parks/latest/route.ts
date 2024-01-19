import {NextRequest, NextResponse} from "next/server";
import {isTokenValid} from "@/app/api/helper";
import {fakeDelayMS, parkConstants} from "@/app/api/parks/parkConstants";
import {Delay} from "@/Helpers/Networking/Delay";

export async function GET(request: NextRequest) {
    const isAuthorized = await isTokenValid();
    if(typeof isAuthorized !== "boolean")
        return isAuthorized;

    await Delay(fakeDelayMS);

    const data = parkConstants.slice(-5);

    return NextResponse.json({
        ok: true,
        parks: data
    });
}
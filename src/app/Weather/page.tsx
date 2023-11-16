'use client'
import React from "react";
import useWeather from "@/CustomHooks/useWeather";

const odense : [number,number] = [55.403756, 10.402370];
const kyoto : [number,number] = [35.011665, 135.768326];

export default function Weather() {
    const [coords, setCoords] = React.useState<[number,number]>(odense);
    const {data, isLoading, isValidating, error} = useWeather(...coords, 120 * 1000)

    function flipCoords() {
        setCoords(c=> c === odense ? kyoto : odense);
    }

    React.useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <pre>
            <button onClick={flipCoords}>
                change
            </button>
            {data && <p>
                data:{JSON.stringify(data, null, 2)}
            </p>}
            <p>
                isl:{isLoading}
            </p>
                        <p>
                isv:{isValidating}
            </p>
            {error &&
                <p>
                    error:{error.toString()}
                </p>}
        </pre>
    )
}
import React from "react";
import {createURL, setUrlParams, UrlParam} from "@/Helpers/Networking/createUrl";
import {formatVariables} from "@/Helpers/Formatting/FormatVariable";
import exp from "constants";
import useSWR, {useSWRConfig} from "swr";

const TAG = 'useWeather';
const openWeatherUrl = process.env.NEXT_PUBLIC_OPENWEATHER_URL;
const route = 'data/2.5/weather';
const key = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;

const apiParams = {
    api_key: "appid",
    latitude: "lat",
    longitude: "lon"
}

export type useWeatherProps = {
    latitude: number,
    longitude: number
}

function useWeatherURL({latitude, longitude}: useWeatherProps): URL {
    if (openWeatherUrl === undefined || key === undefined) {
        const values = formatVariables([['url', openWeatherUrl], ['key', key]]);
        throw new Error(`${TAG} expected url and key to be defined, current values are: ${values}`);
    }

    if (typeof longitude !== "number" || typeof latitude !== "number") {
        const values = formatVariables([['longitude', longitude], ['latitude', latitude]]);
        throw new Error(`${TAG} expected longitude, and latitude to be numbers, actual values: ${values}`)
    }

    const baseUrl = `${openWeatherUrl}/${route}`;
    const mutableParams = (): UrlParam[] => {
        return [[apiParams.latitude, latitude], [apiParams.longitude, longitude]]
    };

    const url = React.useRef<URL>(createURL(baseUrl, [...mutableParams(), [apiParams.api_key, key]]));

    React.useEffect(function () {
        setUrlParams(url.current, mutableParams());
    }, [latitude, longitude])

    return url.current;
}

export default function useWeather(latitude: useWeatherProps['latitude'], longitude: useWeatherProps['longitude'], refreshInterval: number) {
    const url = useWeatherURL({latitude, longitude});
    const props = useSWR('weather', async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }, {refreshInterval});

    const {mutate} = useSWRConfig();

    React.useEffect(function () {
        mutate('weather');
    }, [latitude,longitude])

    return props;
}
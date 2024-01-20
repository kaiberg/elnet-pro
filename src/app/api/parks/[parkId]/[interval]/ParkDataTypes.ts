export enum WeatherType {
    SNOWING, RAINING, SUN
}

export type Datapoint = {
    time: string
    parkId: string
    temperature: number
    skyPercent: number
    weather: WeatherType
    windSpeed: number
}
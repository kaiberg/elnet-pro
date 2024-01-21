export enum WeatherType {
    SUNNY, RAINING, PARTLY_CLOUDY, CLOUDY
}

export type Datapoint = {
    time: number
    parkId: string
    temperature: number // celsius
    skyPercent: number // %
    windSpeed: number, // m/s
    power: number // KwH
}

export type Occurrences = [
    {
        weather: WeatherType.SUNNY,
        count: number
    },
    {
        weather: WeatherType.RAINING,
        count: number
    },
    {
        weather: WeatherType.PARTLY_CLOUDY,
        count: number
    },
    {
        weather: WeatherType.CLOUDY,
        count: number
    }
]

// 1 Weather Conditions: TEMP/WindSPeed 2x line chart
// 2 Weather distribution: N of each weather type with %
// 3 Power predictions: predictions power/skyPercent
//
// time: string 1 2 3
// parkId: string NOT SHOWN
// temperature: number 1
// skyPercent: number 3
// weather: WeatherType 2
// windSpeed: number 1
// power 3
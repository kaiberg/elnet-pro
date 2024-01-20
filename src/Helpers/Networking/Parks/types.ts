export enum ParkDataErrors {
    badInterval,
    noData
}

export function GetCacheTag(parkId: string, interval: string) {
    return `parks{${parkId}{${interval}`
}
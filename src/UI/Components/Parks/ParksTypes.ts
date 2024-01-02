export enum OperationalStatus {
    Operational = 'Operational',
    Warning = 'Warning',
    Error = 'Error'
}

export type Park = {
    id: string,
    name: string,
    description?: string | undefined
    status: OperationalStatus
}
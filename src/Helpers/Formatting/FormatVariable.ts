export type variable = [string,any]

export function formatVariable(name: variable[0], value: variable[1]) {
    return `${name}<${value}>;`
}

export function formatVariables(variables: variable[], separator: string = ", ") {
    return variables
        .map(([name, value]) => formatVariable(name,value))
        .join(separator);
}
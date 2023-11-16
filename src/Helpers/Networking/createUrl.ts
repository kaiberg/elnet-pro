export type UrlParam = [string, string|number]

export function createURL(url: string, params?: UrlParam[]) : URL {
    const urlObject = new URL(url);

    params?.forEach(([param, value]) => setUrlParam(urlObject,param,value));
    return  urlObject;
}

export  function setUrlParam(url: URL, param: UrlParam[0], value: UrlParam[1]) {
    url.searchParams.set(param,value.toString());
}

export  function setUrlParams(url: URL, params: UrlParam[]) {
    params.forEach((param) => setUrlParam(url, ...param))
}

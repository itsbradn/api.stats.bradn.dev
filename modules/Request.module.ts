import axios, { AxiosRequestConfig } from "axios";
import server from "../app";

async function handleGetRequest(url: string, options?: AxiosRequestConfig<any>) {
    let startTime = Date.now();
    let data = await axios.get(url, options);
    let timeTaken = Date.now() - startTime;
    if (timeTaken > 750) {
        server.terminal.error(`Sent request to ${url} in ${timeTaken}ms`);
        return data;
    }
    if (timeTaken > 250) {
        server.terminal.warn(`Sent request to ${url} in ${timeTaken}ms`);
        return data;
    }
    server.terminal.log(`Sent request to ${url} in ${timeTaken}ms`);
    return data;
}

export {
    handleGetRequest
}
import { RouteType } from "../constant/route.constant"

export const controllers: RouteType[] = [];

export default function Controller(path: string, version: number) {
    return function(constructor: Function) {
        controllers.push({
            path: path.substring(0, 1) === '/' ?  `/v${version.toString()}${path}` : `/v${version.toString()}/${path}`,
            router: constructor.prototype.router
        });
    }
}
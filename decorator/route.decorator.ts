import { Router } from "express";
import { RequestType } from "../constant/request.constant";

export default function Route(type: RequestType = RequestType.GET, path: string = '/') {
    return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        let prototype: any = target.constructor.prototype;
        if (!prototype.router) prototype.router = Router();

        let router: Router = prototype.router;

        switch(type) {
            case RequestType.DEL: router.delete(path, descriptor.value); break;
            case RequestType.POST: router.post(path, descriptor.value); break;
            case RequestType.PUT: router.put(path, descriptor.value); break;
            default: router.get(path, descriptor.value);
        }

        return descriptor;
    }
}
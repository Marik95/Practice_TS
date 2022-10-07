import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";

export function controller(routePrefix: string){
    return function(target: Function){
        const router =AppRouter.getInstance();
        let targetObj = Object.getOwnPropertyNames(target.prototype)
        for(let key of targetObj) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);
            const method: Methods = Reflect.getMetadata('method', target.prototype, key);
            if(path){
                router[method](`${routePrefix}${path}`, routeHandler);
            }
        }
    }
}
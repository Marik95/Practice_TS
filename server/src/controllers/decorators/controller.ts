import "reflect-metadata";
import  express  from "express";

export const router = express.Router();

export function controller(routePrefix: string){
    return function(target: Function){
        let targetObj = Object.getOwnPropertyNames(target.prototype)
        for(let key of targetObj) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);
            if(path){
                router.get(`${routePrefix}${path}`, routeHandler);
            }
        }
    }
}
import express, {Request, Response, NextFunction} from "express";
import {IMiddleware} from "../Interface";


export class UrlEncodedMiddleware implements IMiddleware {

    urlEncodedMiddleWare() {
        return express.urlencoded({ extended: false });
    };

    inject(): (req: Request, res: Response, next: NextFunction) => void {
        return this.urlEncodedMiddleWare;
    }
}
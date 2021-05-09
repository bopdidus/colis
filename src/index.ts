import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import {AppRoutes} from "./route/agencyRoute";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });


     // run app
     app.listen(3000);

     console.log("Express application is up and running on port 3000");

}).catch(error => console.log(error));
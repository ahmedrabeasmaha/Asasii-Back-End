"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Core/Server");
const Middleware_1 = require("./Middleware");
const API_1 = require("./Routes/API");
const app = new Server_1.Server();
app.start(3000);
app.middleware(new Middleware_1.JsonMiddleware());
app.middleware(new Middleware_1.TextMiddleware());
app.middleware(new Middleware_1.UrlEncodedMiddleware());
app.route(new API_1.Auth());
app.route(new API_1.File());

app.route(new API_1.Category());

app.route(new API_1.Product());

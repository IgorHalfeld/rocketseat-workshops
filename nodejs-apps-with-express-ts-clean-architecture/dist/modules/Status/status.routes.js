"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_handler_1 = require("./status.handler");
function registerModuleRoutes(router) {
    router.get('/', status_handler_1.get);
}
exports.registerModuleRoutes = registerModuleRoutes;

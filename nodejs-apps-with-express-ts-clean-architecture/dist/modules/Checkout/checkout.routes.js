"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkout_handler_1 = require("./checkout.handler");
function registerModuleRoutes(router) {
    router.post('/checkout', checkout_handler_1.create);
}
exports.registerModuleRoutes = registerModuleRoutes;

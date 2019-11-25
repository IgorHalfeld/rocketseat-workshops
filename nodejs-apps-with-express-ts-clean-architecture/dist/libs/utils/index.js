"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
function registerAllRoutes(modules) {
    var getFullPath = function (mdl) { return "../../modules/" + mdl + "/" + mdl.toLowerCase() + ".routes"; };
    modules.forEach(function (mdl) {
        var registerModuleRoutes = require(getFullPath(mdl)).registerModuleRoutes;
        registerModuleRoutes(router);
    });
    return function (app) {
        app.use(router);
    };
}
exports.registerAllRoutes = registerAllRoutes;
;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
function registerAllMiddlewares(app) {
    app.use(body_parser_1.default.json());
}
exports.registerAllMiddlewares = registerAllMiddlewares;
;

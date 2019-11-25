"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
function findOne(_id) {
    return { _id: new mongodb_1.ObjectID(_id.trim()) };
}
exports.findOne = findOne;

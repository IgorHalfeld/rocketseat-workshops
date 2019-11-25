"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
function findOne(coupon) {
    return { _id: new mongodb_1.ObjectID(coupon.trim()) };
}
exports.findOne = findOne;
function updateStock(stock) {
    return { $set: { stock: stock } };
}
exports.updateStock = updateStock;

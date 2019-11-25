"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sendEmail = function (products, user, message) {
    products.forEach(function (product) {
        console.log("\n      Email sent for " + user.name + "\n      --------------------------\n      " + message.trim() + "\n    ");
    });
};
exports.sendSuccessEmail = sendEmail;
exports.sendFailureEmail = sendEmail;

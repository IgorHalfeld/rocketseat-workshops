"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkout_repository_1 = require("./checkout.repository");
var checkout_validators_1 = require("./checkout.validators");
function create(req, res) {
    var payload = req.body;
    var errorResponse = checkout_validators_1.validateCreate(payload);
    if (errorResponse) {
        res.status(400).json(errorResponse);
        return;
    }
    var order = checkout_repository_1.create(payload);
    if (!order) {
        res.status(500).json({ message: 'error occurred when order was created' });
        return;
    }
    res.status(201).json({ message: 'order created' });
}
exports.create = create;

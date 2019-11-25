"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../../libs/database");
var email_1 = require("../../libs/email");
var payment_querybuilder_1 = require("./payment.querybuilder");
var user_repository_1 = require("../User/user.repository");
var product_repository_1 = require("../Product/product.repository");
function pay(payload) {
    return __awaiter(this, void 0, void 0, function () {
        var user, order, _i, _a, product;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, user_repository_1.findOne(payload.user._id)];
                case 1:
                    user = _b.sent();
                    order = createOrder({ user: user, products: payload.products });
                    if (!order)
                        return [2 /*return*/, null];
                    _i = 0, _a = payload.products;
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    product = _a[_i];
                    return [4 /*yield*/, product_repository_1.updateStock(product._id.toHexString(), product.stock)];
                case 3:
                    _b.sent();
                    console.log(product.name + " - stock updated");
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, order];
            }
        });
    });
}
exports.pay = pay;
function createOrder(payload) {
    return __awaiter(this, void 0, void 0, function () {
        var Payment, creditCards, creditCard, totalAmount, order, response, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Payment = database_1.mongoClient.collection('payments');
                    creditCards = payload.user.credit_cards && Array.isArray(payload.user.credit_cards)
                        ? payload.user.credit_cards
                        : [];
                    creditCard = creditCards.find(function (card) { return card.is_default; }) || { number: 0 };
                    totalAmount = payload.products.reduce(function (acc, cur) {
                        return acc + cur.price;
                    }, 0);
                    order = {
                        created_at: new Date(),
                        items: payload.products.map(function (product) { return ({ id: product._id }); }),
                        user: payload.user,
                        amount: totalAmount,
                    };
                    return [4 /*yield*/, Payment.insertOne(payment_querybuilder_1.createOrder(order))];
                case 1:
                    response = _a.sent();
                    message = "\n    Bought " + payload.products.length + " - " + totalAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "\n    -------------------------------\n    Credit Card: " + creditCard.number + "\n  ";
                    if (response.insertedId)
                        email_1.sendSuccessEmail(payload.products, payload.user, message);
                    else
                        email_1.sendFailureEmail(payload.products, payload.user, message);
                    return [2 /*return*/, response.insertedCount ? order : null];
            }
        });
    });
}
exports.createOrder = createOrder;

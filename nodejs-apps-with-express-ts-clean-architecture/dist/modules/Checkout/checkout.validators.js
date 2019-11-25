"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateCreate(payload) {
    var error = { message: '' };
    if (!payload.items || !payload.items.length) {
        error.message = 'needs at least 1 item';
        return error;
    }
    for (var _i = 0, _a = payload.items; _i < _a.length; _i++) {
        var item = _a[_i];
        if (!item._id) {
            error.message = 'items inside payload should have an id';
            return error;
        }
    }
    return null;
}
exports.validateCreate = validateCreate;

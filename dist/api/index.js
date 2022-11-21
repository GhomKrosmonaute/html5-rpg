"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const authentication_1 = __importDefault(require("./routes/authentication"));
exports.server = (0, express_1.default)();
exports.server.use(express_1.default.json());
exports.server.use("/auth", authentication_1.default);
exports.server.listen((_a = process.env.API_PORT) !== null && _a !== void 0 ? _a : 3000, () => { var _a; return console.log(`Server listening on port ${(_a = process.env.API_PORT) !== null && _a !== void 0 ? _a : 3000}`); });

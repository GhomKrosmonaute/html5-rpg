"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const user_1 = require("../../db/user");
const router = express_1.default.Router();
router.post("/login", (0, express_validator_1.body)("username").isString(), (0, express_validator_1.body)("password").isString(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_1.fromUsers)()
        .where({
        email: req.body.username,
    })
        .first();
    if (!user)
        return res.status(404).send(new Error("User not found"));
    res.send({
        id: user.id,
        token: user.email,
    });
}));
router.post("/register", (0, express_validator_1.body)("email").isEmail(), (0, express_validator_1.body)("username").isString(), (0, express_validator_1.body)("password").isStrongPassword(), (request, reply) => {
    return { oui: true };
});
exports.default = router;

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
const user_1 = require("../../db/user");
const utils_1 = require("../utils");
const fluent_json_schema_1 = __importDefault(require("fluent-json-schema"));
function default_1(server, options, done) {
    server.post("/login", {
        schema: {
            body: {
                username: fluent_json_schema_1.default.string().required(),
                password: fluent_json_schema_1.default.string().required(),
            },
            response: {
                200: {
                    id: fluent_json_schema_1.default.number(),
                    token: fluent_json_schema_1.default.string(),
                },
            },
        },
    }, (0, utils_1.makeHandler)((request, reply) => __awaiter(this, void 0, void 0, function* () {
        const user = yield (0, user_1.fromUsers)()
            .where({
            email: request.body.username,
        })
            .first();
        if (!user)
            return reply.send(new Error("User not found"));
        reply.send({
            id: user.id,
            token: user.email,
        });
    })));
    server.post("/register", {
        schema: {
            params: fluent_json_schema_1.default
                .object()
                .prop("email", fluent_json_schema_1.default.string().format(fluent_json_schema_1.default.FORMATS.EMAIL))
                .prop("username", fluent_json_schema_1.default.string())
                .prop("password", fluent_json_schema_1.default.string()),
            response: {
                200: fluent_json_schema_1.default
                    .object()
                    .prop("token", fluent_json_schema_1.default.string())
                    .prop("id", fluent_json_schema_1.default.string()),
            },
        },
    }, (request, reply) => {
        return { oui: true };
    });
    done();
}
exports.default = default_1;

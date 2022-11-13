"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../db/user");
const fluent_json_schema_1 = __importDefault(require("fluent-json-schema"));
function default_1(server, options, done) {
    server.post("/login", {
        schema: {
            body: fluent_json_schema_1.default
                .object()
                .prop("username", fluent_json_schema_1.default.string().required())
                .prop("password", fluent_json_schema_1.default.string().required()),
            response: {
                200: fluent_json_schema_1.default
                    .object()
                    .prop("token", fluent_json_schema_1.default.string())
                    .prop("id", fluent_json_schema_1.default.string()),
            },
        },
    }, (request, reply) => {
        const user = (0, user_1.fromUsers)().where({
            // @ts-ignore
            email: request.body.username,
        });
        reply.send({
            // @ts-ignore
            id: user.id,
            // @ts-ignore
            token: user.token,
        });
    });
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

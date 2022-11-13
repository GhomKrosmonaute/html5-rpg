"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.players = void 0;
const event_emitter_1 = require("@ghom/event-emitter");
exports.players = [];
class Player extends event_emitter_1.EventEmitter {
    constructor(data) {
        super();
        this.data = data;
        exports.players.push(this);
    }
    destroy() {
        exports.players.splice(exports.players.indexOf(this), 1);
    }
}
exports.Player = Player;

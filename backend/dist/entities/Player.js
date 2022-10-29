"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const event_emitter_1 = require("@ghom/event-emitter");
const utils_1 = require("../utils");
class Player extends event_emitter_1.EventEmitter {
    constructor(stats, inventory) {
        super();
        this.stats = stats;
        this.inventory = inventory;
    }
    clone() {
        return new Player((0, utils_1.clone)(this.stats), (0, utils_1.clone)(this.inventory));
    }
}
exports.Player = Player;

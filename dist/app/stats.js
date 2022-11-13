"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultBaseStats = exports.Stat = exports.statNames = void 0;
const event_emitter_1 = require("@ghom/event-emitter");
exports.statNames = [
    "health",
    "mana",
    "strength",
    "agility",
    "luck",
];
class Stat extends event_emitter_1.EventEmitter {
    constructor(_value, _max = _value) {
        super();
        this._value = _value;
        this._max = _max;
    }
    set value(value) {
        this._value = value;
        this.emit("updated", this).catch(console.error);
    }
    get value() {
        return this._value;
    }
    set percent(value) {
        this.value = (this._max * value) / 100;
    }
    get percent() {
        return (this._value / this._max) * 100;
    }
    set max(value) {
        const oldMax = this._max;
        this._max = value;
        this.value = (this._value / oldMax) * this._max;
    }
    get max() {
        return this._max;
    }
}
exports.Stat = Stat;
function getDefaultBaseStats() {
    return {
        health: 100,
        mana: 100,
        strength: 10,
        agility: 10,
        luck: 10,
    };
}
exports.getDefaultBaseStats = getDefaultBaseStats;

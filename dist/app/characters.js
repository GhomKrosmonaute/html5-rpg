"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCharacter = exports.getPlayerCharacterList = exports.Character = void 0;
const stats_1 = require("./stats");
const equipments_1 = require("./equipments");
const event_emitter_1 = require("@ghom/event-emitter");
const utils_1 = require("../utils");
class Character extends event_emitter_1.EventEmitter {
    constructor(features) {
        super();
        this.features = features;
        this.statuses = [];
        this.stats = (0, utils_1.fromEntries)((0, utils_1.entries)(features.baseStats).map(([name, base]) => {
            return [name, new stats_1.Stat(base)];
        }));
    }
    hasStatus(name) {
        return this.statuses.some((s) => s.features.name === name);
    }
}
exports.Character = Character;
function getPlayerCharacterList() {
    return [
        new Character({
            name: "Ghom",
            baseStats: (0, stats_1.getDefaultBaseStats)(),
            equipment: (0, equipments_1.getEquipment)("Computer"),
        }),
    ];
}
exports.getPlayerCharacterList = getPlayerCharacterList;
function generateCharacter() {
    return new Character({
        baseStats: (0, stats_1.getDefaultBaseStats)(),
        equipment: (0, equipments_1.getEquipment)("Computer"),
    });
}
exports.generateCharacter = generateCharacter;

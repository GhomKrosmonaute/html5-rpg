"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStatus = exports.statusFeatures = exports.Status = void 0;
const event_emitter_1 = require("@ghom/event-emitter");
class Status extends event_emitter_1.EventEmitter {
    constructor(features) {
        super();
        this.features = features;
        this.frame = 0;
    }
    nextStep() {
        this.frame++;
    }
}
exports.Status = Status;
exports.statusFeatures = [
    {
        name: "poisoned",
        description: "The target lose 1% of her max health for each frame",
        duration: 25,
        nextStep: (target, fight) => {
            target.stats.health.percent -= 1 / 100;
        },
    },
    {
        name: "controlled",
        description: "The target is controlled by the equipment",
        duration: 10,
    },
];
function makeStatus(name) {
    const features = exports.statusFeatures.find((s) => s.name === name);
    if (!features)
        throw new Error(`Status "${name}" not found`);
    return new Status(features);
}
exports.makeStatus = makeStatus;

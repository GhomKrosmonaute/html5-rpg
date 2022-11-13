"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = void 0;
const styles_1 = require("../data/styles");
class Equipment {
    constructor(features) {
        this.features = features;
        this.styleLayers = (0, styles_1.getStyleLayers)(features);
    }
}
exports.Equipment = Equipment;

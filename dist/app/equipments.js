"use strict";
/*
 * Les équipements sont les objets qui peuvent être équipés par les personnages.
 * Ils peuvent être des armes, des armures, des objets magiques, des familiers, etc.
 * Un seul équipement par personnage.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEquipment = exports.equipments = exports.Equipment = void 0;
const elements_1 = require("./elements");
const utils_1 = require("../utils");
const statuses_1 = require("./statuses");
class Equipment {
    constructor(features) {
        this.features = features;
    }
    normalDamagesTo(target) { }
}
exports.Equipment = Equipment;
exports.equipments = [
    new Equipment({
        name: "Computer",
        element: elements_1.ElementName.Fire,
        description: "A computer",
        stats: {
            agility: (stat) => stat.value * 0.5,
            mana: (stat) => stat.value * 1.5,
        },
        onAction(target) {
            if (!target.hasStatus("controlled") && (0, utils_1.dice)(1 / 5)) {
                console.log("Computer is hacking");
                target.statuses.push((0, statuses_1.makeStatus)("controlled"));
            }
            else {
                console.log("Computer is attacking");
                this.normalDamagesTo(target);
            }
        },
    }),
];
function getEquipment(name) {
    const equipment = exports.equipments.find((e) => e.features.name === name);
    if (!equipment)
        throw new Error(`Equipment "${name}" not found`);
    return equipment;
}
exports.getEquipment = getEquipment;

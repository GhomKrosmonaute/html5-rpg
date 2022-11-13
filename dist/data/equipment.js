"use strict";
/*
 * Les équipements sont les objets qui peuvent être équipés par les personnages.
 * Ils peuvent être des armes, des armures, des objets magiques, des familiers, etc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipments = exports.EquipmentType = void 0;
const slots_1 = require("./slots");
const styles_1 = require("./styles");
const elements_1 = require("./elements");
const utils_1 = require("../utils");
var EquipmentType;
(function (EquipmentType) {
    // Weapons
    EquipmentType["Sword"] = "sword";
    EquipmentType["Gun"] = "gun";
    EquipmentType["Lance"] = "lance";
    EquipmentType["Haxe"] = "haxe";
    EquipmentType["Bow"] = "bow";
    EquipmentType["MagicRing"] = "magic-ring";
    EquipmentType["Heavy"] = "heavy";
    EquipmentType["Relic"] = "relic";
    // Familiars
    // Dragon = "dragon",
    // Unicorn = "unicorn",
    // Werewolf = "werewolf",
    // Phoenix = "phoenix",
    // Wolf = "wolf",
    // Cat = "cat",
    // Snake = "snake",
    // Spider = "spider",
    // Bat = "bat",
    // Bird = "bird",
    // Fish = "fish",
    // Turtle = "turtle",
    // Rabbit = "rabbit",
    // Bear = "bear",
    // Lion = "lion",
    // Elephant = "elephant",
    // Fox = "fox",
    // Panda = "panda",
    // Monkey = "monkey",
    // Pig = "pig",
    // Cow = "cow",
    // Horse = "horse",
    // Dog = "dog",
    // Mouse = "mouse",
})(EquipmentType = exports.EquipmentType || (exports.EquipmentType = {}));
exports.equipments = [];
// Generate equipments
(0, utils_1.forEachEnum)(EquipmentType, (typeName, type) => {
    const { slot, slotSizes } = (0, slots_1.getSlotByEquipmentType)(type);
    (0, utils_1.forEachEnum)(styles_1.StyleName, (styleName, style) => {
        (0, utils_1.forEachEnum)(elements_1.ElementName, (elementName, element) => {
            for (const slotSize of slotSizes) {
                exports.equipments.push({
                    name: `${elementName} ${styleName} ${typeName}`,
                    type,
                    style,
                    element,
                    slot,
                    slotSize,
                });
            }
        });
    });
});
console.log(exports.equipments
    .map((e) => e.name)
    .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 100)
    .join("\n"));
//
// console.log(enumEntries(EquipmentType).length * enumEntries(StyleName).length)
// console.log(equipments.length)

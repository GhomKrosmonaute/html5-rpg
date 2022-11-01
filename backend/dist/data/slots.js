"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotCount = exports.existingSlotCount = exports.getSlotByEquipmentType = exports.slots = exports.SlotName = void 0;
const equipment_1 = require("./equipment");
const utils_1 = require("../utils");
var SlotName;
(function (SlotName) {
    // Weapons & Armors
    SlotName["Hands"] = "hands";
    // Familiars
    // Stand = "stand",
    // Invocation = "invocation",
})(SlotName = exports.SlotName || (exports.SlotName = {}));
exports.slots = [
    {
        name: SlotName.Hands,
        size: 2,
    },
    // {
    //   name: SlotName.Stand,
    //   size: 3,
    // },
    // {
    //   name: SlotName.Invocation,
    //   size: 1,
    // },
];
function getSlotByEquipmentType(type) {
    switch (type) {
        case equipment_1.EquipmentType.Sword:
        case equipment_1.EquipmentType.Gun:
        case equipment_1.EquipmentType.Lance:
        case equipment_1.EquipmentType.Haxe:
        case equipment_1.EquipmentType.Bow:
        case equipment_1.EquipmentType.MagicRing:
        case equipment_1.EquipmentType.Heavy:
        case equipment_1.EquipmentType.Relic:
            return {
                slot: SlotName.Hands,
                slotSizes: [1, 2],
            };
        // case EquipmentType.Dragon:
        // case EquipmentType.Phoenix:
        // case EquipmentType.Unicorn:
        //   return {
        //     slot: SlotName.Invocation,
        //     slotSizes: [1],
        //   }
        // case EquipmentType.Lion:
        // case EquipmentType.Bear:
        // case EquipmentType.Werewolf:
        // case EquipmentType.Elephant:
        //   return {
        //     slot: SlotName.Stand,
        //     slotSizes: [3],
        //   }
        // case EquipmentType.Wolf:
        // case EquipmentType.Panda:
        // case EquipmentType.Cow:
        // case EquipmentType.Horse:
        //   return {
        //     slot: SlotName.Stand,
        //     slotSizes: [2],
        //   }
        // case EquipmentType.Cat:
        // case EquipmentType.Snake:
        // case EquipmentType.Spider:
        // case EquipmentType.Bat:
        // case EquipmentType.Bird:
        // case EquipmentType.Fish:
        // case EquipmentType.Turtle:
        // case EquipmentType.Rabbit:
        // case EquipmentType.Fox:
        // case EquipmentType.Monkey:
        // case EquipmentType.Pig:
        // case EquipmentType.Dog:
        // case EquipmentType.Mouse:
        //   return {
        //     slot: SlotName.Stand,
        //     slotSizes: [1],
        //   }
        default:
            throw new Error(`Missing slot for "${type}" equipment type`);
    }
}
exports.getSlotByEquipmentType = getSlotByEquipmentType;
exports.existingSlotCount = (0, utils_1.enumEntries)(SlotName).length;
exports.slotCount = exports.slots.length;
console.assert(exports.slotCount === exports.existingSlotCount, `Forgotten ${exports.existingSlotCount - exports.slotCount} slots: ${(0, utils_1.enumEntries)(SlotName)
    .filter(([name]) => !exports.slots.find((slot) => slot.name === SlotName[name]))
    .map(([name]) => name)
    .join(", ")}`);

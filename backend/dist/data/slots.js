"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotCount = exports.existingSlotCount = exports.getSlotByEquipmentType = exports.slots = exports.SlotName = void 0;
const equipment_1 = require("./equipment");
const utils_1 = require("../utils");
var SlotName;
(function (SlotName) {
    // Weapons & Armors
    SlotName["Hands"] = "hands";
    // Accessories
    SlotName["Fingers"] = "fingers";
    SlotName["Wrist"] = "wrist";
    SlotName["Ears"] = "ears";
    // Armors
    SlotName["Legs"] = "legs";
    SlotName["Chest"] = "chest";
    SlotName["Head"] = "head";
    SlotName["Neck"] = "neck";
    // Familiars
    SlotName["Stand"] = "stand";
    SlotName["Invocation"] = "invocation";
})(SlotName = exports.SlotName || (exports.SlotName = {}));
exports.slots = [
    {
        name: SlotName.Hands,
        size: 2,
    },
    {
        name: SlotName.Fingers,
        size: 10,
    },
    {
        name: SlotName.Wrist,
        size: 2,
    },
    {
        name: SlotName.Ears,
        size: 2,
    },
    {
        name: SlotName.Legs,
        size: 2,
    },
    {
        name: SlotName.Chest,
        size: 1,
    },
    {
        name: SlotName.Head,
        size: 1,
    },
    {
        name: SlotName.Neck,
        size: 1,
    },
    {
        name: SlotName.Stand,
        size: 3,
    },
    {
        name: SlotName.Invocation,
        size: 1,
    },
];
function getSlotByEquipmentType(type) {
    switch (type) {
        case equipment_1.EquipmentType.Sword:
        case equipment_1.EquipmentType.Gun:
        case equipment_1.EquipmentType.Lance:
        case equipment_1.EquipmentType.Haxe:
        case equipment_1.EquipmentType.Bow:
            return {
                slot: SlotName.Hands,
                slotSizes: [1, 2],
            };
        case equipment_1.EquipmentType.Trousers:
            return {
                slot: SlotName.Legs,
                slotSizes: [1, 2],
            };
        case equipment_1.EquipmentType["T-shirt"]:
        case equipment_1.EquipmentType.Sweater:
            return {
                slot: SlotName.Chest,
                slotSizes: [1],
            };
        case equipment_1.EquipmentType.Helmet:
        case equipment_1.EquipmentType.Glasses:
            return {
                slot: SlotName.Head,
                slotSizes: [1],
            };
        case equipment_1.EquipmentType.Ring:
            return {
                slot: SlotName.Fingers,
                slotSizes: [1],
            };
        case equipment_1.EquipmentType.Necklace:
            return {
                slot: SlotName.Neck,
                slotSizes: [1],
            };
        case equipment_1.EquipmentType.Bracelet:
            return {
                slot: SlotName.Wrist,
                slotSizes: [1],
            };
        case equipment_1.EquipmentType.Earring:
            return {
                slot: SlotName.Ears,
                slotSizes: [1, 2],
            };
        case equipment_1.EquipmentType.Dragon:
        case equipment_1.EquipmentType.Phoenix:
        case equipment_1.EquipmentType.Unicorn:
            return {
                slot: SlotName.Invocation,
                slotSizes: [1],
            };
        case equipment_1.EquipmentType.Lion:
        case equipment_1.EquipmentType.Bear:
        case equipment_1.EquipmentType.Werewolf:
        case equipment_1.EquipmentType.Elephant:
            return {
                slot: SlotName.Stand,
                slotSizes: [3],
            };
        case equipment_1.EquipmentType.Wolf:
        case equipment_1.EquipmentType.Panda:
        case equipment_1.EquipmentType.Cow:
        case equipment_1.EquipmentType.Horse:
            return {
                slot: SlotName.Stand,
                slotSizes: [2],
            };
        case equipment_1.EquipmentType.Cat:
        case equipment_1.EquipmentType.Snake:
        case equipment_1.EquipmentType.Spider:
        case equipment_1.EquipmentType.Bat:
        case equipment_1.EquipmentType.Bird:
        case equipment_1.EquipmentType.Fish:
        case equipment_1.EquipmentType.Turtle:
        case equipment_1.EquipmentType.Rabbit:
        case equipment_1.EquipmentType.Fox:
        case equipment_1.EquipmentType.Monkey:
        case equipment_1.EquipmentType.Pig:
        case equipment_1.EquipmentType.Dog:
        case equipment_1.EquipmentType.Mouse:
            return {
                slot: SlotName.Stand,
                slotSizes: [1],
            };
        default:
            console.error(`Missing slot for "${type}" equipment type`);
            return {
                slot: SlotName.Hands,
                slotSizes: [0],
            };
    }
}
exports.getSlotByEquipmentType = getSlotByEquipmentType;
exports.existingSlotCount = (0, utils_1.enumEntries)(SlotName).length;
exports.slotCount = exports.slots.length;
console.assert(exports.slotCount === exports.existingSlotCount, `Forgotten ${exports.existingSlotCount - exports.slotCount} slots: ${(0, utils_1.enumEntries)(SlotName)
    .filter(([name]) => !exports.slots.find((slot) => slot.name === SlotName[name]))
    .map(([name]) => name)
    .join(", ")}`);

"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.slotCount =
  exports.existingSlotCount =
  exports.getSlotByEquipmentType =
  exports.slots =
  exports.SlotName =
    void 0
const equipment_1 = require("./equipment")
const utils_1 = require("../utils")
var SlotName
;(function (SlotName) {
  // Weapons & Armors
  SlotName[(SlotName["Hands"] = 0)] = "Hands"
  // Accessories
  SlotName[(SlotName["Finger"] = 1)] = "Finger"
  SlotName[(SlotName["Wrist"] = 2)] = "Wrist"
  SlotName[(SlotName["Ear"] = 3)] = "Ear"
  // Armors
  SlotName[(SlotName["Legs"] = 4)] = "Legs"
  SlotName[(SlotName["Chest"] = 5)] = "Chest"
  SlotName[(SlotName["Head"] = 6)] = "Head"
  SlotName[(SlotName["Neck"] = 7)] = "Neck"
  // Familiars
  SlotName[(SlotName["Stand"] = 8)] = "Stand"
  SlotName[(SlotName["Invocation"] = 9)] = "Invocation"
})((SlotName = exports.SlotName || (exports.SlotName = {})))
exports.slots = [
  {
    name: SlotName.Hands,
    size: 2,
  },
  {
    name: SlotName.Finger,
    size: 10,
  },
  {
    name: SlotName.Wrist,
    size: 2,
  },
  {
    name: SlotName.Ear,
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
]
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
      }
    case equipment_1.EquipmentType.Trousers:
      return {
        slot: SlotName.Legs,
        slotSizes: [1, 2],
      }
    case equipment_1.EquipmentType["T-shirt"]:
    case equipment_1.EquipmentType.Sweater:
      return {
        slot: SlotName.Chest,
        slotSizes: [1],
      }
    case equipment_1.EquipmentType.Helmet:
    case equipment_1.EquipmentType.Glasses:
      return {
        slot: SlotName.Head,
        slotSizes: [1],
      }
    case equipment_1.EquipmentType.Ring:
      return {
        slot: SlotName.Finger,
        slotSizes: [1],
      }
    case equipment_1.EquipmentType.Necklace:
      return {
        slot: SlotName.Neck,
        slotSizes: [1],
      }
    case equipment_1.EquipmentType.Bracelet:
      return {
        slot: SlotName.Wrist,
        slotSizes: [1],
      }
    case equipment_1.EquipmentType.Earring:
      return {
        slot: SlotName.Ear,
        slotSizes: [1, 2],
      }
    case equipment_1.EquipmentType.Dragon:
    case equipment_1.EquipmentType.Phoenix:
    case equipment_1.EquipmentType.Unicorn:
      return {
        slot: SlotName.Invocation,
        slotSizes: [1],
      }
    case equipment_1.EquipmentType.Lion:
    case equipment_1.EquipmentType.Bear:
    case equipment_1.EquipmentType.Werewolf:
      return {
        slot: SlotName.Stand,
        slotSizes: [3],
      }
    case equipment_1.EquipmentType.Wolf:
      return {
        slot: SlotName.Stand,
        slotSizes: [2],
      }
    case equipment_1.EquipmentType.Cat:
    case equipment_1.EquipmentType.Snake:
    case equipment_1.EquipmentType.Spider:
    case equipment_1.EquipmentType.Bat:
    case equipment_1.EquipmentType.Bird:
    case equipment_1.EquipmentType.Fish:
    case equipment_1.EquipmentType.Turtle:
    case equipment_1.EquipmentType.Rabbit:
      return {
        slot: SlotName.Stand,
        slotSizes: [1],
      }
  }
}
exports.getSlotByEquipmentType = getSlotByEquipmentType
exports.existingSlotCount = (0, utils_1.enumEntries)(SlotName).length
exports.slotCount = exports.slots.length
console.assert(
  exports.slotCount === exports.existingSlotCount,
  `Forgotten ${exports.existingSlotCount - exports.slotCount} slots: ${(0,
  utils_1.enumEntries)(SlotName)
    .filter(
      ([name]) => !exports.slots.find((slot) => slot.name === SlotName[name])
    )
    .map(([name]) => name)
    .join(", ")}`
)

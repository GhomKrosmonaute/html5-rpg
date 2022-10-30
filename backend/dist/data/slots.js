"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.slots = exports.SlotName = void 0
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

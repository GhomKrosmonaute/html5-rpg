"use strict"
/*
 * Les équipements sont les objets qui peuvent être équipés par les personnages.
 * Ils peuvent être des armes, des armures, des objets magiques, des familiers, etc.
 */
Object.defineProperty(exports, "__esModule", { value: true })
exports.equipments =
  exports.getSlotByEquipmentType =
  exports.EquipmentType =
    void 0
const slots_1 = require("./slots")
const styles_1 = require("./styles")
const elements_1 = require("./elements")
const utils_1 = require("../utils")
var EquipmentType
;(function (EquipmentType) {
  // Weapons
  EquipmentType[(EquipmentType["Sword"] = 0)] = "Sword"
  EquipmentType[(EquipmentType["Gun"] = 1)] = "Gun"
  EquipmentType[(EquipmentType["Lance"] = 2)] = "Lance"
  EquipmentType[(EquipmentType["Haxe"] = 3)] = "Haxe"
  EquipmentType[(EquipmentType["Bow"] = 4)] = "Bow"
  // Armors
  EquipmentType[(EquipmentType["Trousers"] = 5)] = "Trousers"
  EquipmentType[(EquipmentType["T-shirt"] = 6)] = "T-shirt"
  EquipmentType[(EquipmentType["Sweater"] = 7)] = "Sweater"
  EquipmentType[(EquipmentType["Helmet"] = 8)] = "Helmet"
  EquipmentType[(EquipmentType["Glasses"] = 9)] = "Glasses"
  // Accessories
  EquipmentType[(EquipmentType["Ring"] = 10)] = "Ring"
  EquipmentType[(EquipmentType["Necklace"] = 11)] = "Necklace"
  EquipmentType[(EquipmentType["Bracelet"] = 12)] = "Bracelet"
  EquipmentType[(EquipmentType["Earring"] = 13)] = "Earring"
  // Familiars
  EquipmentType[(EquipmentType["Dragon"] = 14)] = "Dragon"
  EquipmentType[(EquipmentType["Unicorn"] = 15)] = "Unicorn"
  EquipmentType[(EquipmentType["Werewolf"] = 16)] = "Werewolf"
  EquipmentType[(EquipmentType["Phoenix"] = 17)] = "Phoenix"
  EquipmentType[(EquipmentType["Wolf"] = 18)] = "Wolf"
  EquipmentType[(EquipmentType["Cat"] = 19)] = "Cat"
  EquipmentType[(EquipmentType["Snake"] = 20)] = "Snake"
  EquipmentType[(EquipmentType["Spider"] = 21)] = "Spider"
  EquipmentType[(EquipmentType["Bat"] = 22)] = "Bat"
  EquipmentType[(EquipmentType["Bird"] = 23)] = "Bird"
  EquipmentType[(EquipmentType["Fish"] = 24)] = "Fish"
  EquipmentType[(EquipmentType["Turtle"] = 25)] = "Turtle"
  EquipmentType[(EquipmentType["Rabbit"] = 26)] = "Rabbit"
  EquipmentType[(EquipmentType["Bear"] = 27)] = "Bear"
  EquipmentType[(EquipmentType["Lion"] = 28)] = "Lion"
})((EquipmentType = exports.EquipmentType || (exports.EquipmentType = {})))
function getSlotByEquipmentType(type) {
  switch (type) {
    case EquipmentType.Sword:
    case EquipmentType.Gun:
    case EquipmentType.Lance:
    case EquipmentType.Haxe:
    case EquipmentType.Bow:
      return {
        slot: slots_1.SlotName.Hands,
        slotSizes: [1, 2],
      }
    case EquipmentType.Trousers:
      return {
        slot: slots_1.SlotName.Legs,
        slotSizes: [1, 2],
      }
    case EquipmentType["T-shirt"]:
    case EquipmentType.Sweater:
      return {
        slot: slots_1.SlotName.Chest,
        slotSizes: [1],
      }
    case EquipmentType.Helmet:
    case EquipmentType.Glasses:
      return {
        slot: slots_1.SlotName.Head,
        slotSizes: [1],
      }
    case EquipmentType.Ring:
      return {
        slot: slots_1.SlotName.Finger,
        slotSizes: [1],
      }
    case EquipmentType.Necklace:
      return {
        slot: slots_1.SlotName.Neck,
        slotSizes: [1],
      }
    case EquipmentType.Bracelet:
      return {
        slot: slots_1.SlotName.Wrist,
        slotSizes: [1],
      }
    case EquipmentType.Earring:
      return {
        slot: slots_1.SlotName.Ear,
        slotSizes: [1, 2],
      }
    case EquipmentType.Dragon:
    case EquipmentType.Phoenix:
    case EquipmentType.Unicorn:
      return {
        slot: slots_1.SlotName.Invocation,
        slotSizes: [1],
      }
    case EquipmentType.Lion:
    case EquipmentType.Bear:
    case EquipmentType.Werewolf:
      return {
        slot: slots_1.SlotName.Stand,
        slotSizes: [3],
      }
    case EquipmentType.Wolf:
      return {
        slot: slots_1.SlotName.Stand,
        slotSizes: [2],
      }
    case EquipmentType.Cat:
    case EquipmentType.Snake:
    case EquipmentType.Spider:
    case EquipmentType.Bat:
    case EquipmentType.Bird:
    case EquipmentType.Fish:
    case EquipmentType.Turtle:
    case EquipmentType.Rabbit:
      return {
        slot: slots_1.SlotName.Stand,
        slotSizes: [1],
      }
  }
}
exports.getSlotByEquipmentType = getSlotByEquipmentType
exports.equipments = []
// Generate equipments
;(0, utils_1.forEachEnum)(EquipmentType, (typeName, type) => {
  ;(0, utils_1.forEachEnum)(styles_1.StyleName, (styleName, style) => {
    ;(0, utils_1.forEachEnum)(
      elements_1.ElementName,
      (elementName, element) => {
        const { slot, slotSizes } = getSlotByEquipmentType(type)
        for (const slotSize of slotSizes) {
          exports.equipments.push({
            name: `${elementName} ${styleName} ${typeName}`,
            type,
            style,
            element,
            slot,
            slotSize,
          })
        }
      }
    )
  })
})
console.log(exports.equipments.length)

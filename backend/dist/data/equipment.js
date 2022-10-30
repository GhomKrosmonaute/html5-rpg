"use strict"
/*
 * Les équipements sont les objets qui peuvent être équipés par les personnages.
 * Ils peuvent être des armes, des armures, des objets magiques, des familiers, etc.
 */
Object.defineProperty(exports, "__esModule", { value: true })
exports.equipments = exports.EquipmentType = void 0
const slots_1 = require("./slots")
const styles_1 = require("./styles")
const elements_1 = require("./elements")
const utils_1 = require("../utils")
var EquipmentType
;(function (EquipmentType) {
  // Weapons
  EquipmentType["Sword"] = "sword"
  EquipmentType["Gun"] = "gun"
  EquipmentType["Lance"] = "lance"
  EquipmentType["Haxe"] = "haxe"
  EquipmentType["Bow"] = "bow"
  // Armors
  EquipmentType["Trousers"] = "trousers"
  EquipmentType["T-shirt"] = "t-shirt"
  EquipmentType["Sweater"] = "sweater"
  EquipmentType["Helmet"] = "helmet"
  EquipmentType["Glasses"] = "glasses"
  // Accessories
  EquipmentType["Ring"] = "ring"
  EquipmentType["Necklace"] = "necklace"
  EquipmentType["Bracelet"] = "bracelet"
  EquipmentType["Earring"] = "earring"
  // Familiars
  EquipmentType["Dragon"] = "dragon"
  EquipmentType["Unicorn"] = "unicorn"
  EquipmentType["Werewolf"] = "werewolf"
  EquipmentType["Phoenix"] = "phoenix"
  EquipmentType["Wolf"] = "wolf"
  EquipmentType["Cat"] = "cat"
  EquipmentType["Snake"] = "snake"
  EquipmentType["Spider"] = "spider"
  EquipmentType["Bat"] = "bat"
  EquipmentType["Bird"] = "bird"
  EquipmentType["Fish"] = "fish"
  EquipmentType["Turtle"] = "turtle"
  EquipmentType["Rabbit"] = "rabbit"
  EquipmentType["Bear"] = "bear"
  EquipmentType["Lion"] = "lion"
})((EquipmentType = exports.EquipmentType || (exports.EquipmentType = {})))
exports.equipments = []
// Generate equipments
;(0, utils_1.forEachEnum)(EquipmentType, (typeName, type) => {
  ;(0, utils_1.forEachEnum)(styles_1.StyleName, (styleName, style) => {
    ;(0, utils_1.forEachEnum)(
      elements_1.ElementName,
      (elementName, element) => {
        const { slot, slotSizes } = (0, slots_1.getSlotByEquipmentType)(type)
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

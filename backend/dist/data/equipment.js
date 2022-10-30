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

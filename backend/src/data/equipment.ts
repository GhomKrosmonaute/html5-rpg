/*
 * Les équipements sont les objets qui peuvent être équipés par les personnages.
 * Ils peuvent être des armes, des armures, des objets magiques, des familiers, etc.
 */

import { SlotName, getSlotByEquipmentType, slots } from "./slots"
import { StyleName } from "./styles"
import { ElementName } from "./elements"

import { forEachEnum } from "../utils"

export enum EquipmentType {
  // Weapons
  Sword = "sword",
  Gun = "gun",
  Lance = "lance",
  Haxe = "haxe",
  Bow = "bow",

  // Armors
  Trousers = "trousers",
  "T-shirt" = "t-shirt",
  Sweater = "sweater",
  Helmet = "helmet",
  Glasses = "glasses",
  Shoes = "shoes",
  Gloves = "gloves",
  Coat = "coat",

  // Accessories
  Ring = "ring",
  Necklace = "necklace",
  Bracelet = "bracelet",
  Earring = "earring",
  "Magic stone" = "magic-stone",
  Pendant = "pendant",
  "Magic book" = "magic-book",
  Hairpin = "hairpin",

  // Familiars
  Dragon = "dragon",
  Unicorn = "unicorn",
  Werewolf = "werewolf",
  Phoenix = "phoenix",
  Wolf = "wolf",
  Cat = "cat",
  Snake = "snake",
  Spider = "spider",
  Bat = "bat",
  Bird = "bird",
  Fish = "fish",
  Turtle = "turtle",
  Rabbit = "rabbit",
  Bear = "bear",
  Lion = "lion",
  Elephant = "elephant",
  Fox = "fox",
  Panda = "panda",
  Monkey = "monkey",
  Pig = "pig",
  Cow = "cow",
  Horse = "horse",
  Dog = "dog",
  Mouse = "mouse",
}

export interface EquipmentFeatures {
  name: EquipmentName
  type: EquipmentType
  style: StyleName
  element: ElementName
  slot: SlotName
  slotSize: number
}

export type EquipmentName =
  `${keyof typeof ElementName} ${keyof typeof StyleName} ${keyof typeof EquipmentType}`

export const equipments: EquipmentFeatures[] = []

// Generate equipments
forEachEnum(EquipmentType, (typeName, type) => {
  forEachEnum(StyleName, (styleName, style) => {
    forEachEnum(ElementName, (elementName, element) => {
      const { slot, slotSizes } = getSlotByEquipmentType(type)

      for (const slotSize of slotSizes) {
        equipments.push({
          name: `${elementName} ${styleName} ${typeName}`,
          type,
          style,
          element,
          slot,
          slotSize,
        })
      }
    })
  })
})

console.log(
  equipments
    .map((e) => e.name)
    .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 20)
    .join("\n")
)

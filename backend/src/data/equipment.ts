/*
 * Les équipements sont les objets qui peuvent être équipés par les personnages.
 * Ils peuvent être des armes, des armures, des objets magiques, des familiers, etc.
 */

import { SlotName, getSlotByEquipmentType, slots } from "./slots"
import { StyleName } from "./styles"
import { ElementName } from "./elements"

import { enumEntries, forEachEnum } from "../utils"

export enum EquipmentType {
  // Weapons
  Sword,
  Gun,
  Lance,
  Haxe,
  Bow,

  // Armors
  Trousers,
  "T-shirt",
  Sweater,
  Helmet,
  Glasses,

  // Accessories
  Ring,
  Necklace,
  Bracelet,
  Earring,

  // Familiars
  Dragon,
  Unicorn,
  Werewolf,
  Phoenix,
  Wolf,
  Cat,
  Snake,
  Spider,
  Bat,
  Bird,
  Fish,
  Turtle,
  Rabbit,
  Bear,
  Lion,
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

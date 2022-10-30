/*
 * Les équipements sont les objets qui peuvent être équipés par les personnages.
 * Ils peuvent être des armes, des armures, des objets magiques, des familiers, etc.
 */

import { SlotName } from "./slots"
import { StyleName } from "./styles"
import { ElementName } from "./elements"

import { forEachEnum } from "../utils"

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

export function getSlotByEquipmentType(type: EquipmentType): {
  slot: SlotName
  slotSizes: number[]
} {
  switch (type) {
    case EquipmentType.Sword:
    case EquipmentType.Gun:
    case EquipmentType.Lance:
    case EquipmentType.Haxe:
    case EquipmentType.Bow:
      return {
        slot: SlotName.Hands,
        slotSizes: [1, 2],
      }
    case EquipmentType.Trousers:
      return {
        slot: SlotName.Legs,
        slotSizes: [1, 2],
      }
    case EquipmentType["T-shirt"]:
    case EquipmentType.Sweater:
      return {
        slot: SlotName.Chest,
        slotSizes: [1],
      }
    case EquipmentType.Helmet:
    case EquipmentType.Glasses:
      return {
        slot: SlotName.Head,
        slotSizes: [1],
      }
    case EquipmentType.Ring:
      return {
        slot: SlotName.Finger,
        slotSizes: [1],
      }
    case EquipmentType.Necklace:
      return {
        slot: SlotName.Neck,
        slotSizes: [1],
      }
    case EquipmentType.Bracelet:
      return {
        slot: SlotName.Wrist,
        slotSizes: [1],
      }
    case EquipmentType.Earring:
      return {
        slot: SlotName.Ear,
        slotSizes: [1, 2],
      }
    case EquipmentType.Dragon:
    case EquipmentType.Phoenix:
    case EquipmentType.Unicorn:
      return {
        slot: SlotName.Invocation,
        slotSizes: [1],
      }
    case EquipmentType.Lion:
    case EquipmentType.Bear:
    case EquipmentType.Werewolf:
      return {
        slot: SlotName.Stand,
        slotSizes: [3],
      }
    case EquipmentType.Wolf:
      return {
        slot: SlotName.Stand,
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
        slot: SlotName.Stand,
        slotSizes: [1],
      }
  }
}

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

console.log(equipments.length)

import { EquipmentType } from "./equipment"
import { enumEntries } from "../utils"

export enum SlotName {
  // Weapons & Armors
  Hands = "hands",

  // Familiars
  // Stand = "stand",
  // Invocation = "invocation",
}

export interface Slot {
  name: SlotName
  size: number
}

export const slots: Slot[] = [
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
]

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
    case EquipmentType.MagicRing:
    case EquipmentType.Heavy:
    case EquipmentType.Relic:
      return {
        slot: SlotName.Hands,
        slotSizes: [1, 2],
      }
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
      console.error(`Missing slot for "${type}" equipment type`)
      return {
        slot: SlotName.Hands,
        slotSizes: [0],
      }
  }
}

export const existingSlotCount = enumEntries(SlotName).length
export const slotCount = slots.length

console.assert(
  slotCount === existingSlotCount,
  `Forgotten ${existingSlotCount - slotCount} slots: ${enumEntries(SlotName)
    .filter(([name]) => !slots.find((slot) => slot.name === SlotName[name]))
    .map(([name]) => name)
    .join(", ")}`
)

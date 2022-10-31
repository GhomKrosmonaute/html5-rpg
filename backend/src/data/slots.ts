import { EquipmentType } from "./equipment"
import { enumEntries } from "../utils"

export enum SlotName {
  // Weapons & Armors
  Hands = "hands",

  // Accessories
  Fingers = "fingers",
  Wrist = "wrist",
  Ears = "ears",

  // Armors
  Legs = "legs",
  Chest = "chest",
  Head = "head",
  Neck = "neck",

  // Familiars
  Stand = "stand",
  Invocation = "invocation",
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
        slot: SlotName.Fingers,
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
        slot: SlotName.Ears,
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
    default:
      throw new Error(`Missing slot for "${type}" equipment type`)
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

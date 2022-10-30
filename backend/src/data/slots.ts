export enum SlotName {
  // Weapons & Armors
  Hands,

  // Accessories
  Finger,
  Wrist,
  Ear,

  // Armors
  Legs,
  Chest,
  Head,
  Neck,

  // Familiars
  Stand,
  Invocation,
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

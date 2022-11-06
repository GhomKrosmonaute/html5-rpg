import { Stats, Stat, StatName } from "./stats"
import { Equipment, getEquipment } from "./equipments"
import { BaseEventNames, EventEmitter } from "@ghom/event-emitter"
import { Status } from "./statuses"

export interface CharacterEvents extends BaseEventNames {
  action: [Character]
  damage: [Character, number]
  heal: [Character, number]
  death: [Character]
}

export interface CharacterFeatures {
  name: string
  baseStats: Record<StatName, number>
  equipment: Equipment
}

export class Character extends EventEmitter<CharacterEvents> {
  public statuses: Status[] = []

  constructor(public features: CharacterFeatures) {
    super()
  }

  hasStatus(name: string) {
    return this.statuses.some((s) => s.features.name === name)
  }
}

/**
 * Only robots (can be hacked and have corrosion)
 */
export const characters: Character[] = [
  new Character({
    name: "Ghom",
    baseStats: {
      health: 100,
      mana: 100,
      strength: 10,
      agility: 10,
      luck: 10,
    },
    equipment: getEquipment("Computer"),
  }),
]

export function getCharacter(name: string) {
  const character = characters.find((c) => c.features.name === name)

  if (!character) throw new Error(`Character "${name}" not found`)

  return character
}

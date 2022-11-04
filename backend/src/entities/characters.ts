import { Stats, Stat } from "./stats"
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
  stats: Stats
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
    stats: {
      health: new Stat(100, 100),
      mana: new Stat(100, 100),
      strength: new Stat(10, 10),
      agility: new Stat(10, 10),
      luck: new Stat(10, 10),
    },
    equipment: getEquipment("Computer"),
  }),
]

export function getCharacter(name: string) {
  const character = characters.find((c) => c.features.name === name)

  if (!character) throw new Error(`Character "${name}" not found`)

  return character
}

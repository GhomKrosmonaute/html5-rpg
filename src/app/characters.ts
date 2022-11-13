import { BaseStats, getDefaultBaseStats, Stat, Stats } from "./stats"
import { Equipment, getEquipment } from "./equipments"
import { BaseEventNames, EventEmitter } from "@ghom/event-emitter"
import { Status } from "./statuses"
import { entries, fromEntries } from "../utils"

export interface CharacterEvents extends BaseEventNames {
  action: [Character]
  damage: [Character, number]
  heal: [Character, number]
  death: [Character]
}

export interface CharacterFeatures {
  name?: string
  baseStats: BaseStats
  equipment: Equipment
}

export class Character extends EventEmitter<CharacterEvents> {
  public statuses: Status[] = []
  public stats: Stats

  constructor(public features: CharacterFeatures) {
    super()

    this.stats = fromEntries(
      entries(features.baseStats).map(([name, base]) => {
        return [name, new Stat(base)]
      })
    )
  }

  hasStatus(name: string) {
    return this.statuses.some((s) => s.features.name === name)
  }
}

export function getPlayerCharacterList(): Character[] {
  return [
    new Character({
      name: "Ghom",
      baseStats: getDefaultBaseStats(),
      equipment: getEquipment("Computer"),
    }),
  ]
}

export function generateCharacter() {
  return new Character({
    baseStats: getDefaultBaseStats(),
    equipment: getEquipment("Computer"),
  })
}

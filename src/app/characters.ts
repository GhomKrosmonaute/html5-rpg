import {
  BaseStats,
  getDefaultBaseStats,
  getStatsState,
  Stat,
  Stats,
  StatsState,
} from "./stats"
import { Equipment, EquipmentState, getEquipment } from "./equipments"
import { BaseEventNames, EventEmitter } from "@ghom/event-emitter"
import { entries, fromEntries } from "../utils"
import { Status } from "./statuses"

export interface CharacterEvents extends BaseEventNames {
  action: [Character]
  damage: [Character, number]
  heal: [Character, number]
  death: [Character]
}

export interface CharacterFeatures {
  name: string
  baseStats: BaseStats
  equipment: Equipment
}

export interface CharacterState {
  name: string
  stats: StatsState
  equipment: EquipmentState
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

  toJSON(): CharacterState {
    return {
      name: this.features.name,
      stats: getStatsState(this.stats),
    }
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
    name: generateCharacterName(),
    baseStats: getDefaultBaseStats(),
    equipment: getEquipment("Computer"),
  })
}

export function generateCharacterName() {
  return "Ghom"
}

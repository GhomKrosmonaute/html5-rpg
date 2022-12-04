import { EventEmitter, BaseEventNames } from "@ghom/event-emitter"
import { StatName } from "./stats"

export interface PlayerEvents extends BaseEventNames {}

export interface PlayerData {
  stats: Record<StatName, number>
  equipmentNames: string[]
  characterNames: string[]
  teamCharacterNames: string[]
}

export const players: Player[] = []

export class Player extends EventEmitter<PlayerEvents> {
  constructor(public data: PlayerData) {
    super()

    players.push(this)
  }

  destroy() {
    players.splice(players.indexOf(this), 1)
  }
}

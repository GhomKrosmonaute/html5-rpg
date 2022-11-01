import { Player } from "./Player"
import { Stat, StatName } from "./Stat"
import { clone } from "../utils"

export interface FightLog {
  frame: number
  about: Fighter
}

export class Fighter {
  public logs: FightLog[] = []
  public stats: Record<StatName, Stat>

  constructor(public player: Player) {
    this.stats = clone(player.stats)
  }
}

export abstract class Fight {
  public logs: FightLog[] = []

  abstract nextStep(): void
}

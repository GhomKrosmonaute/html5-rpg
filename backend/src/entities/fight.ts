import { Player } from "./players"
import { BaseEventNames, EventEmitter } from "@ghom/event-emitter"

export interface FightEvents extends BaseEventNames {
  start: [Fight]
  end: [Fight]
  frameUpdate: [Fight]
}

export interface FightLog {
  frame: number
  about?: Player
  content: string
  type: "death" | "damage" | "heal" | "miss" | "critical" | "system"
}

export abstract class Fight extends EventEmitter<FightEvents> {
  public frame = 0
  public logs: FightLog[] = []

  protected constructor(public player1: Player, public player2: Player) {
    super()
  }

  abstract endCondition(): boolean

  abstract nextStep(): void

  start() {
    this.log({ type: "system", content: `fight start` })

    while (!this.endCondition()) {
      this.log({ type: "system", content: `frame ${this.frame}` })

      this.nextStep()

      this.frame++
    }

    this.log({ type: "system", content: `fight done` })
  }

  log(log: Omit<FightLog, "frame">) {
    this.logs.push({ frame: this.frame, ...log })
  }
}

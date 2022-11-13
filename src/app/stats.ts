import { EventEmitter, BaseEventNames } from "@ghom/event-emitter"

export const statNames = [
  "health",
  "mana",
  "strength",
  "agility",
  "luck",
] as const

export type StatName = typeof statNames[number]
export type Stats = Record<StatName, Stat>
export type BaseStats = Record<StatName, number>

export interface StatEvents extends BaseEventNames {
  updated: [Stat]
}

export class Stat extends EventEmitter<StatEvents> {
  constructor(private _value: number, private _max: number = _value) {
    super()
  }

  set value(value) {
    this._value = value
    this.emit("updated", this).catch(console.error)
  }

  get value() {
    return this._value
  }

  set percent(value) {
    this.value = (this._max * value) / 100
  }

  get percent() {
    return (this._value / this._max) * 100
  }

  set max(value) {
    const oldMax = this._max
    this._max = value
    this.value = (this._value / oldMax) * this._max
  }

  get max() {
    return this._max
  }
}

export function getDefaultBaseStats(): BaseStats {
  return {
    health: 100,
    mana: 100,
    strength: 10,
    agility: 10,
    luck: 10,
  }
}

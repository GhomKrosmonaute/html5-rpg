import { EventEmitter, BaseEventNames } from "@ghom/event-emitter"
import { Stat, StatName } from "./Stat"
import { Equipment } from "./Equipment"

import { clone } from "../utils"

import type { EquipmentName } from "../data/equipment"

export interface PlayerEvents extends BaseEventNames {}

export class Player extends EventEmitter<PlayerEvents> {
  constructor(
    public stats: Record<StatName, Stat>,
    public inventory: Record<EquipmentName, Equipment>
  ) {
    super()
  }

  clone() {
    return new Player(clone(this.stats), clone(this.inventory))
  }
}

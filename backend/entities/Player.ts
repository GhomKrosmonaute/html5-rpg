import { EventEmitter, BaseEventNames } from "@ghom/event-emitter"
import { Stat, StatName } from "./Stat"
import { Item, ItemName } from "./Item"

import { clone } from "../utils"

export interface PlayerEvents extends BaseEventNames {}

export class Player extends EventEmitter<PlayerEvents> {
  constructor(
    public stats: Record<StatName, Stat>,
    public inventory: Record<ItemName, Item>
  ) {
    super()
  }

  clone() {
    return new Player(clone(this.stats), clone(this.inventory))
  }
}

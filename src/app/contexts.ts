import { BaseEventNames, EventEmitter } from "@ghom/event-emitter"

export interface ContextEvents extends BaseEventNames {
  enter: [Context]
  leave: [from: Context, to: Context]
}

export interface ContextFeatures {
  name: string
  actions: ContextAction[]
}

export interface ContextAction {
  name: string
  description: string
  run: (context: Context) => void
}

/**
 * Represent a page of the game
 */
export class Context extends EventEmitter<ContextEvents> {
  constructor(public features: ContextFeatures) {
    super()
  }

  enter() {
    this.emit("enter", this)
  }

  leave(to: Context) {
    this.emit("leave", this, to)
  }

  runAction(name: string) {
    const action = this.features.actions.find((a) => a.name === name)

    if (!action) throw new Error(`Action "${name}" not found`)

    action.run(this)
  }
}

/**
 * Only robots (can be hacked and have corrosion)
 */
export const contexts: Context[] = [
  new Context({
    name: "Village",
    actions: [],
  }),
]

export function getContext(name: string) {
  const context = contexts.find((c) => c.features.name === name)

  if (!context) throw new Error(`Context "${name}" not found`)

  return context
}

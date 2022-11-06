import { Character } from "./characters"
import { BaseEventNames, EventEmitter } from "@ghom/event-emitter"
import { Fight } from "./fight"

export interface StatusEvents extends BaseEventNames {
  start: [Status]
  received: [Status, Character]
  timeout: [Status]
  removed: [Status]
  end: [Status]
}

export interface StatusFeatures {
  name: string
  description: string
  duration: number
  onSetup?: (target: Character, fight: Fight) => void
  onTeardown?: (target: Character, fight: Fight) => void
  nextStep?: (target: Character, fight: Fight) => void
}

export class Status extends EventEmitter<StatusEvents> {
  frame = 0

  constructor(public features: StatusFeatures) {
    super()
  }

  nextStep() {
    this.frame++
  }
}

export const statusFeatures: StatusFeatures[] = [
  {
    name: "poisoned",
    description: "The target lose 1% of her max health for each frame",
    duration: 25,
    nextStep: (target, fight) => {
      target.features.stats.health.percent -= 1 / 100
    },
  },
  {
    name: "controlled",
    description: "The target is controlled by the equipment",
    duration: 10,
  },
]

export function makeStatus(name: string) {
  const features = statusFeatures.find((s) => s.name === name)

  if (!features) throw new Error(`Status "${name}" not found`)

  return new Status(features)
}

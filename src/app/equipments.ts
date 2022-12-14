/*
 * Les équipements sont les objets qui peuvent être équipés par les personnages.
 * Ils peuvent être des armes, des armures, des objets magiques, des familiers, etc.
 * Un seul équipement par personnage.
 *
 */

import { Character } from "./characters"
import { ElementName } from "./elements"
import { Stat, StatName } from "./stats"
import { dice } from "../utils"
import { makeStatus } from "./statuses"

export interface EquipmentFeatures {
  name: string
  description: string
  element: ElementName
  onAction: (this: Equipment, target: Character) => void
  stats: Partial<Record<StatName, (stat: Stat) => number>>
}

export interface EquipmentState {
  name: string
}

export class Equipment {
  constructor(public features: EquipmentFeatures) {}

  normalDamagesTo(target: Character) {}

  toJSON(): EquipmentState {
    return {
      name: this.features.name,
    }
  }
}

export const equipments: Equipment[] = [
  new Equipment({
    name: "Computer",
    element: ElementName.Fire,
    description: "A computer",
    stats: {
      agility: (stat) => stat.value * 0.5,
      mana: (stat) => stat.value * 1.5,
    },
    onAction(target) {
      if (!target.hasStatus("controlled") && dice(1 / 5)) {
        console.log("Computer is hacking")
        target.statuses.push(makeStatus("controlled"))
      } else {
        console.log("Computer is attacking")
        this.normalDamagesTo(target)
      }
    },
  }),
]

export function getEquipment(name: string) {
  const equipment = equipments.find((e) => e.features.name === name)

  if (!equipment) throw new Error(`Equipment "${name}" not found`)

  return equipment
}

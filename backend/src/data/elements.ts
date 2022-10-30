/*
 * Les éléments influencent les faiblesses et les résistances des armes et des armures.
 */

import { enumEntries } from "../utils"
import { SlotName, slots } from "./slots"

export enum ElementName {
  Water,
  Fire,
  Plant,
  Ground,
  Wind,
  Metal,
  Neutral,
}

export enum Weakness {
  Immune = 0,
  Resistant = 0.5,
  Normal = 1,
  Weak = 2,
}

export interface ElementFeatures {
  name: ElementName
  weakness: Map<ElementName, Weakness>
}

/**
 * Les faiblesses et les résistances qui ne sont pas mentionnées <br/>
 * Sont par défaut à 1. <br/>
 */
export const elements: ElementFeatures[] = [
  {
    name: ElementName.Fire,
    weakness: new Map([
      [ElementName.Water, Weakness.Weak],
      [ElementName.Ground, Weakness.Weak],
      [ElementName.Fire, Weakness.Resistant],
      [ElementName.Plant, Weakness.Resistant],
    ]),
  },
  {
    name: ElementName.Water,
    weakness: new Map([
      [ElementName.Wind, Weakness.Weak],
      [ElementName.Plant, Weakness.Weak],
      [ElementName.Water, Weakness.Resistant],
      [ElementName.Fire, Weakness.Resistant],
    ]),
  },
  {
    name: ElementName.Plant,
    weakness: new Map([
      [ElementName.Fire, Weakness.Weak],
      [ElementName.Metal, Weakness.Weak],
      [ElementName.Plant, Weakness.Resistant],
      [ElementName.Water, Weakness.Resistant],
    ]),
  },
  {
    name: ElementName.Ground,
    weakness: new Map([
      [ElementName.Wind, Weakness.Weak],
      [ElementName.Plant, Weakness.Weak],
      [ElementName.Water, Weakness.Weak],
      [ElementName.Ground, Weakness.Resistant],
      [ElementName.Fire, Weakness.Resistant],
      [ElementName.Metal, Weakness.Resistant],
    ]),
  },
  {
    name: ElementName.Wind,
    weakness: new Map([
      [ElementName.Metal, Weakness.Weak],
      [ElementName.Plant, Weakness.Weak],
      [ElementName.Fire, Weakness.Weak],
      [ElementName.Wind, Weakness.Resistant],
      [ElementName.Water, Weakness.Resistant],
      [ElementName.Ground, Weakness.Resistant],
    ]),
  },
  {
    name: ElementName.Metal,
    weakness: new Map([
      [ElementName.Water, Weakness.Weak],
      [ElementName.Ground, Weakness.Weak],
      [ElementName.Fire, Weakness.Weak],
      [ElementName.Metal, Weakness.Resistant],
      [ElementName.Wind, Weakness.Resistant],
      [ElementName.Plant, Weakness.Resistant],
    ]),
  },
  {
    name: ElementName.Neutral,
    weakness: new Map(),
  },
]

export const existingElementCount = enumEntries(ElementName).length
export const elementCount = elements.length

console.assert(
  elementCount === existingElementCount,
  `Forgotten ${existingElementCount - elementCount} elements: ${enumEntries(
    ElementName
  )
    .filter(
      ([name]) =>
        !elements.find((element) => element.name === ElementName[name])
    )
    .map(([name]) => name)
    .join(", ")}`
)

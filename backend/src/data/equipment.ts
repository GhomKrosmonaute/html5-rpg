/*
 * Les équipements sont les objets qui peuvent être équipés par les personnages.
 * Ils peuvent être des armes, des armures, des objets magiques, des familiers, etc.
 */

import { StyleName } from "./styles"
import { ElementName } from "./elements"

import { entries } from "../utils"

export enum EquipmentType {
  Weapon,
  Armor,
  Accessory,
  Familiar,
}

export interface EquipmentFeatures {
  name: string
  type: EquipmentType
  style: StyleName
  element: ElementName
}

export const equipments: EquipmentFeatures[] = []

// Generate equipments

for (const [type] of entries(EquipmentType)) {
  for (const [style] of entries(StyleName)) {
    for (const [element] of entries(ElementName)) {
      equipments.push({
        name: `${element} ${style} ${type}`,
        type: EquipmentType[type],
        style: StyleName[style],
        element: ElementName[element],
      })
    }
  }
}

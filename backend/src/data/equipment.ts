/*
 * Les équipements sont les objets qui peuvent être équipés par les personnages.
 * Ils peuvent être des armes, des armures, des objets magiques, des familiers, etc.
 */

import type { StyleName } from "./styles"
import type { ElementName } from "./elements"

export type EquipmentType =
  | "sword"
  | "shield"
  | "armor"
  | "helmet"
  | "boots"
  | "gloves"
  | "ring"
  | "amulet"
  | "trinket"
  | "weapon"

export interface EquipmentFeatures {
  name: string
  type: EquipmentType
  style: StyleName
  element: ElementName
}

export const equipment = [
  { name: "Big sword", element: "Earth", style: "Assassin", type: "sword" },
  { name: "Sword", element: "Dark", style: "Assassin", type: "sword" },
] satisfies Array<EquipmentFeatures>;

export type EquipmentName = typeof equipment[number]["name"]

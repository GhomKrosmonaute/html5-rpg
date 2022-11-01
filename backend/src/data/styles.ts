import { EquipmentFeatures, EquipmentType } from "./equipment"
import { ElementName } from "./elements"
import { SlotName } from "./slots"

export enum StyleName {
  Cyberpunk = "cyberpunk",
  Gothic = "gothic",
  Japanese = "japanese",
  Medieval = "medieval",
  PostApo = "post-apo",
  Steampunk = "steampunk",
  Street = "street",
}

export interface StyleLayers {
  background: `/assets/images/elements/${ElementName}/color.jpg`
  sprite: `/assets/images/styles/${StyleName}/${EquipmentType}.png`
  element: `/assets/images/elements/${ElementName}/icon.png`
  slot: `/assets/images/slots/${SlotName}/${number}.png`
}

export function getStyleLayers({
  style,
  type,
  element,
  slot,
  slotSize,
}: EquipmentFeatures): StyleLayers {
  return {
    background: `/assets/images/elements/${element}/color.jpg`,
    sprite: `/assets/images/styles/${style}/${type}.png`,
    element: `/assets/images/elements/${element}/icon.png`,
    slot: `/assets/images/slots/${slot}/${slotSize}.png`,
  }
}

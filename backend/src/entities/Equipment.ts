import type { EquipmentFeatures } from "../data/equipment"
import { StyleLayers, getStyleLayers } from "../data/styles"

export class Equipment {
  private styleLayers: StyleLayers

  constructor(public features: EquipmentFeatures) {
    this.styleLayers = getStyleLayers(features)
  }
}

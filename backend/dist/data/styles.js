"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.getStyleLayers = exports.StyleName = void 0
var StyleName
;(function (StyleName) {
  StyleName["Medieval"] = "medieval"
  StyleName["Steampunk"] = "steampunk"
  StyleName["Cyberpunk"] = "cyberpunk"
  StyleName["Modern"] = "modern"
  StyleName["PopCulture"] = "pop_culture"
  StyleName["Japanese"] = "japanese"
  StyleName["Gothic"] = "gothic"
  StyleName["Punk"] = "punk"
})((StyleName = exports.StyleName || (exports.StyleName = {})))
function getStyleLayers({ style, type, element, slot, slotSize }) {
  return {
    background: `/assets/images/elements/${element}/color.jpg`,
    sprite: `/assets/images/styles/${style}/${type}.png`,
    element: `/assets/images/elements/${element}/icon.png`,
    slot: `/assets/images/slots/${slot}/${slotSize}.png`,
  }
}
exports.getStyleLayers = getStyleLayers

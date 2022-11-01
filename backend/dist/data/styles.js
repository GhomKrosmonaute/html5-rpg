"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.getStyleLayers = exports.StyleName = void 0
var StyleName
;(function (StyleName) {
  StyleName["Cyberpunk"] = "cyberpunk"
  StyleName["Gothic"] = "gothic"
  StyleName["Japanese"] = "japanese"
  StyleName["Medieval"] = "medieval"
  StyleName["PostApo"] = "post-apo"
  StyleName["Steampunk"] = "steampunk"
  StyleName["Street"] = "street"
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

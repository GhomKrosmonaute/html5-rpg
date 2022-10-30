"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.getStylePath = exports.StyleName = void 0
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
function getStylePath(styleName, assetName) {
  return `/assets/images/${styleName}/${assetName}`
}
exports.getStylePath = getStylePath

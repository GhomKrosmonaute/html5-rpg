"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.clone = void 0
function clone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj
  }
  const copy = obj.constructor()
  for (const attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = clone(obj[attr])
    }
  }
  return copy
}
exports.clone = clone

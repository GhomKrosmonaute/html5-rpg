"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.forEachEnum = exports.entries = exports.clone = void 0
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
function entries(obj) {
  // @ts-ignore
  return Object.entries(obj)
}
exports.entries = entries
function forEachEnum(e, cb) {
  return entries(e)
    .filter(([name]) => isNaN(Number(name)))
    .forEach(([name, value]) => cb(name, value))
}
exports.forEachEnum = forEachEnum

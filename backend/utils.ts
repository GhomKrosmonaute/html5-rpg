export function clone<T>(obj: T): T {
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

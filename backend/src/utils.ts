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

export function entries<Obj extends object>(
  obj: Obj
): [keyof Obj, Obj[keyof Obj]][] {
  // @ts-ignore
  return Object.entries(obj)
}

export function forEachEnum<Enum extends object>(
  e: Enum,
  cb: (name: keyof Enum, value: Enum[keyof Enum]) => void
) {
  return entries(e)
    .filter(([name]) => isNaN(Number(name)))
    .forEach(([name, value]) => cb(name as keyof Enum, value))
}

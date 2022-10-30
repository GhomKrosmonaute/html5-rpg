export enum StyleName {
  Medieval = "medieval",
  Steampunk = "steampunk",
  Cyberpunk = "cyberpunk",
  Modern = "modern",
  PopCulture = "pop_culture",
  Japanese = "japanese",
  Gothic = "gothic",
  Punk = "punk",
}

export function getStylePath(styleName: StyleName, assetName: string): string {
  return `/assets/images/${styleName}/${assetName}`
}

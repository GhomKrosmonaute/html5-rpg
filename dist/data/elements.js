"use strict";
/*
 * Les éléments influencent les faiblesses et les résistances des armes et des armures.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementCount = exports.existingElementCount = exports.elements = exports.Weakness = exports.ElementName = void 0;
const utils_1 = require("../utils");
var ElementName;
(function (ElementName) {
    ElementName[ElementName["Water"] = 0] = "Water";
    ElementName[ElementName["Fire"] = 1] = "Fire";
    ElementName[ElementName["Plant"] = 2] = "Plant";
    ElementName[ElementName["Ground"] = 3] = "Ground";
    ElementName[ElementName["Wind"] = 4] = "Wind";
    ElementName[ElementName["Metal"] = 5] = "Metal";
    ElementName[ElementName["Neutral"] = 6] = "Neutral";
})(ElementName = exports.ElementName || (exports.ElementName = {}));
var Weakness;
(function (Weakness) {
    Weakness[Weakness["Immune"] = 0] = "Immune";
    Weakness[Weakness["Resistant"] = 0.5] = "Resistant";
    Weakness[Weakness["Normal"] = 1] = "Normal";
    Weakness[Weakness["Weak"] = 2] = "Weak";
})(Weakness = exports.Weakness || (exports.Weakness = {}));
/**
 * Les faiblesses et les résistances qui ne sont pas mentionnées <br/>
 * Sont par défaut à 1. <br/>
 */
exports.elements = [
    {
        name: ElementName.Fire,
        weakness: new Map([
            [ElementName.Water, Weakness.Weak],
            [ElementName.Ground, Weakness.Weak],
            [ElementName.Fire, Weakness.Resistant],
            [ElementName.Plant, Weakness.Resistant],
        ]),
    },
    {
        name: ElementName.Water,
        weakness: new Map([
            [ElementName.Wind, Weakness.Weak],
            [ElementName.Plant, Weakness.Weak],
            [ElementName.Water, Weakness.Resistant],
            [ElementName.Fire, Weakness.Resistant],
        ]),
    },
    {
        name: ElementName.Plant,
        weakness: new Map([
            [ElementName.Fire, Weakness.Weak],
            [ElementName.Metal, Weakness.Weak],
            [ElementName.Plant, Weakness.Resistant],
            [ElementName.Water, Weakness.Resistant],
        ]),
    },
    {
        name: ElementName.Ground,
        weakness: new Map([
            [ElementName.Wind, Weakness.Weak],
            [ElementName.Plant, Weakness.Weak],
            [ElementName.Water, Weakness.Weak],
            [ElementName.Ground, Weakness.Resistant],
            [ElementName.Fire, Weakness.Resistant],
            [ElementName.Metal, Weakness.Resistant],
        ]),
    },
    {
        name: ElementName.Wind,
        weakness: new Map([
            [ElementName.Metal, Weakness.Weak],
            [ElementName.Plant, Weakness.Weak],
            [ElementName.Fire, Weakness.Weak],
            [ElementName.Wind, Weakness.Resistant],
            [ElementName.Water, Weakness.Resistant],
            [ElementName.Ground, Weakness.Resistant],
        ]),
    },
    {
        name: ElementName.Metal,
        weakness: new Map([
            [ElementName.Water, Weakness.Weak],
            [ElementName.Ground, Weakness.Weak],
            [ElementName.Fire, Weakness.Weak],
            [ElementName.Metal, Weakness.Resistant],
            [ElementName.Wind, Weakness.Resistant],
            [ElementName.Plant, Weakness.Resistant],
        ]),
    },
    {
        name: ElementName.Neutral,
        weakness: new Map(),
    },
];
exports.existingElementCount = (0, utils_1.enumEntries)(ElementName).length;
exports.elementCount = exports.elements.length;
console.assert(exports.elementCount === exports.existingElementCount, `Forgotten ${exports.existingElementCount - exports.elementCount} elements: ${(0, utils_1.enumEntries)(ElementName)
    .filter(([name]) => !exports.elements.find((element) => element.name === ElementName[name]))
    .map(([name]) => name)
    .join(", ")}`);

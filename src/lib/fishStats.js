import { fishList } from "./fishList.js";

const fishes = Object.values(fishList);

function createCounterStat(field, sort = true) {
	const returnValue = {};
	for (const fish of fishes) {
		if (fish[field] !== undefined) {
			returnValue[fish[field]] = (returnValue[fish[field]] || 0) + 1;
		}
	}
	return sort ? Object.fromEntries(Object.entries(returnValue).sort(
		(a, b) => b[1] - a[1]
	)) : returnValue;
}

export const creators = createCounterStat("creator");
export const bitmapCreators = createCounterStat("textureCreator");
export const vectorCreators = createCounterStat("vectorTextureCreator");
export const categories = createCounterStat("category");
export const types = createCounterStat("type");

export const count = fishes.length;
export const bitmapCount = fishes.filter(o => o.bitmap).length;
export const vectorCount = fishes.filter(o => o.vector).length;

let _altCount = 0;
{
	for (const fish of Object.values(fishList)) {
		_altCount += Object.keys(fish.alts || {}).length || 0;
		_altCount += Object.keys(fish.vectorAlts || {}).length || 0;
	}
}
export let altCount = _altCount;
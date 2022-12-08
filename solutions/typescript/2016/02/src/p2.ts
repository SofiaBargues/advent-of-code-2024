import { split, task } from '@alexaegis/advent-of-code-lib';
import { Direction, isDirectionMarker, Vec2, Vec2Like } from '@alexaegis/advent-of-code-lib/model';
import packageJson from '../package.json' assert { type: 'json' };

const keypad = [
	[undefined, undefined, 1, undefined, undefined],
	[undefined, 2, 3, 4, undefined],
	[5, 6, 7, 8, 9],
	[undefined, 'A', 'B', 'C', undefined],
	[undefined, undefined, 'D', undefined, undefined],
].reverse();

const toKeypadNumber = (vec: Vec2Like): number | string | undefined => keypad[vec.y]?.[vec.x];

export const p2 = (input: string): string => {
	const position = new Vec2(0, 2);

	const result = split(input).reduce((acc, line) => {
		line.split('')
			.filter(isDirectionMarker)
			.map(Direction.fromMarker)
			.forEach((direction) =>
				position.addMut(direction, {
					limit: (v) => toKeypadNumber(v) === undefined,
				})
			);
		return acc + toKeypadNumber(position);
	}, '');

	return result;
};

await task(p2, packageJson.aoc); // 46C91 ~1.9ms
import { task } from '@alexaegis/advent-of-code-lib';
import packageJson from '../package.json' assert { type: 'json' };
import { parse } from './parse.js';

function zip<T, U>(a: T[], b: U[]): [T, U][] {
	return a.map((_, i) => [a[i], b[i]] as [T, U]);
}

export const p1 = (input: string): number => {
	const { left, right } = parse(input);

	left.sort((a, b) => b - a);
	right.sort((a, b) => b - a);

	return zip(left, right)
		.map(([l, r]) => Math.abs(l - r))
		.sum()
};
await task(p1, packageJson.aoc); // 1722302 ~16.04ms

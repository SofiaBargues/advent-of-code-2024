import { loadTaskResources } from '@alexaegis/advent-of-code-lib';
import { describe, expect, it } from 'vitest';
import packageJson from '../package.json' assert { type: 'json' };
import { p2 } from './p2.js';

describe('2015 - Day 4 - Part Two', () => {
	it(
		'should solve the input',
		async () => {
			const resources = await loadTaskResources(packageJson.aoc);
			expect(p2(resources.input)).to.equal(9958218);
		},
		{ timeout: 20000 }
	);

	it(
		'should resolve to 6742839 when using the example',
		async () => {
			const resources = await loadTaskResources(packageJson.aoc, 'example.txt');
			expect(p2(resources.input)).to.equal(6742839);
		},
		{ timeout: 20000 }
	);

	it(
		'should resolve to 5714438 when using the example',
		async () => {
			const resources = await loadTaskResources(packageJson.aoc, 'example.2.txt');
			expect(p2(resources.input)).to.equal(5714438);
		},
		{ timeout: 20000 }
	);
});
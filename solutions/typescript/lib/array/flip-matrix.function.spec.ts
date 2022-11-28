import { describe, expect, it } from 'vitest';
import { flipMatrix } from './flip-matrix.function.js';

describe('flipMatrix', () => {
	const matrix = [
		['0', '1', '2'],
		['3', '4', '5'],
		['6', '7', '8'],
	];
	const xFlippedMatrix = [
		['6', '7', '8'],
		['3', '4', '5'],
		['0', '1', '2'],
	];
	const yFlippedMatrix = [
		['2', '1', '0'],
		['5', '4', '3'],
		['8', '7', '6'],
	];

	const joinMatrix = (matrix: string[][]) => matrix.map((r) => r.join('')).join('\n');
	const joinedMatrix = joinMatrix(matrix);
	const joinedXFlippedMatrix = joinMatrix(xFlippedMatrix);
	const joinedYFlippedMatrix = joinMatrix(yFlippedMatrix);

	it('should be able to flip along the x axis and not mutate the original', () => {
		expect(joinMatrix(flipMatrix(matrix, 'x'))).to.equal(joinedXFlippedMatrix);
		expect(joinMatrix(matrix)).to.equal(joinedMatrix);
	});

	it('should be able to flip along the y axis and not mutate the original', () => {
		expect(joinMatrix(flipMatrix(matrix, 'y'))).to.equal(joinedYFlippedMatrix);
		expect(joinMatrix(matrix)).to.equal(joinedMatrix);
	});

	it('should throw an error for one dimensional arrays', () => {
		expect(() => flipMatrix([1, 2, 3] as unknown as number[][])).to.throw();
	});

	it('should return an empty array for an empty array', () => {
		expect(flipMatrix([]).length).to.equal(0);
	});
});

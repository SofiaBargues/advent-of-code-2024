import { describe, expect, it } from 'vitest';
import { addWithinRange } from './add-within-range.function.js';

describe('Add Withing Range', () => {
	it('should return 2 when adding 4 to 8 within a range from 1 to 10', async () => {
		expect(addWithinRange(8, 4, 9)).to.equal(2);
	});

	it('should return 6 when adding 4 to 6 within a range from 4 to 8', async () => {
		expect(addWithinRange(6, 4, 4, 7)).to.equal(6);
	});
});

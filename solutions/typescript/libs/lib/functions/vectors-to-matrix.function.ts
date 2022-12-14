import { BoundingBox } from '../model/vector/bounding-box.class.js';
import type { Vec2 } from '../model/vector/vec2.class.js';

export const vectorsToMatrix = (
	vects: Vec2[]
): { matrix: string[][]; boundingBox: BoundingBox } => {
	const boundingBox = new BoundingBox(vects);
	const matrix: string[][] = [];

	for (let y = boundingBox.bottom; y <= boundingBox.top; y++) {
		const row: string[] = [];
		for (let x = boundingBox.left; x <= boundingBox.right; x++) {
			if (vects.find((v) => v.x === x && v.y === y)) {
				row.push('#');
			} else {
				row.push('.');
			}
		}
		matrix.push(row);
	}

	return {
		matrix,
		boundingBox,
	};
};
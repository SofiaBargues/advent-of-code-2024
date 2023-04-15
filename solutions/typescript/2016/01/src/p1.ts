import { task } from '@alexaegis/advent-of-code-lib';
import { Direction, Vec2 } from '@alexaegis/advent-of-code-lib/model';
import packageJson from '../package.json';

export const p1 = (input: string): number =>
	input
		.split(', ')
		.reduce(
			(acc, next) => {
				if (next[0] === 'R') acc.direction = acc.direction.right();
				else if (next[0] === 'L') acc.direction = acc.direction.left();
				acc.position.addMut(acc.direction, {
					times: Number(next.substring(1)),
				});
				return acc;
			},
			{ position: Vec2.ORIGIN.clone(), direction: Direction.NORTH }
		)
		.position.manhattan(Vec2.ORIGIN);

await task(p1, packageJson.aoc); // 300 ~0.37ms

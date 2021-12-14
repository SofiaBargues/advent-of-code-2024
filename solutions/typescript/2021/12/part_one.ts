import { bench, read } from '@lib';
import { Graph, Node } from '@lib/model/graph';
import { day, year } from '.';

const getPaths = (
	current: Node<string, number>,
	until: (node: Node<string, number>) => boolean,
	allPaths: Node<string, number>[][],
	path: Node<string, number>[] = []
): void => {
	path.push(current);
	if (until(current)) {
		allPaths.push(path);
		return;
	}
	for (const neighbour of current) {
		if (
			neighbour.to.value === 'start' ||
			(neighbour.to.value.isLowerCase() &&
				path.some((node) => node.value === neighbour.to.value))
		) {
			continue;
		}
		getPaths(neighbour.to, until, allPaths, [...path]);
	}
};

/**
 * Find all unique paths from start to end
 * @param input
 * @returns
 */
export const runner = (input: string): number => {
	const valueVertices = input.lines().map((line) => {
		const [from, to] = line.split('-');
		return { from, to };
	});
	const graph = Graph.fromUniqueValueVertices<string>(valueVertices, (t) => t, true);
	const start = graph.getNode('start')!;
	const allPaths: Node<string, number>[][] = [];
	getPaths(start, (node) => node.value === 'end', allPaths);
	return allPaths.length;
};

// istanbul ignore next
if (require.main === module) {
	(async () => console.log(`Result: ${await bench(read(year, day), runner)}`))(); // 4167 ~5.83ms
}
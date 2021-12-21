import { bench, read } from '@lib';
import { memoize } from '@lib/functions';
import { day, year } from '.';

interface RoundState {
	p1Position: number;
	p2Position: number;
	p1Score: number;
	p2Score: number;
	rollPhase: number;
	isP1Turn: boolean;
}

interface RoundResultState {
	p1WinCount: number;
	p2WinCount: number;
}

const playFromRoundState = memoize((state: RoundState, roll: number): RoundResultState => {
	const nextState: RoundState = { ...state };
	if (nextState.isP1Turn) {
		nextState.p1Position = nextState.p1Position.addWithinRange(roll, 1, 10);
	} else {
		nextState.p2Position = nextState.p2Position.addWithinRange(roll, 1, 10);
	}

	if (nextState.rollPhase === 2) {
		if (nextState.isP1Turn) {
			nextState.p1Score += nextState.p1Position;
		} else {
			nextState.p2Score += nextState.p2Position;
		}
	}

	if (nextState.p1Score >= 21) {
		return { p1WinCount: 1, p2WinCount: 0 };
	} else if (nextState.p2Score >= 21) {
		return { p1WinCount: 0, p2WinCount: 1 };
	} else {
		nextState.rollPhase++;
		if (nextState.rollPhase > 2) {
			nextState.rollPhase = 0;
			nextState.isP1Turn = !nextState.isP1Turn;
		}
		return diracRoll(nextState);
	}
});

const diracRoll = (state: RoundState): RoundResultState => {
	const result1 = playFromRoundState(state, 1);
	const result2 = playFromRoundState(state, 2);
	const result3 = playFromRoundState(state, 3);

	return {
		p1WinCount: result1.p1WinCount + result2.p1WinCount + result3.p1WinCount,
		p2WinCount: result1.p2WinCount + result2.p2WinCount + result3.p2WinCount,
	};
};

export const parse = (line: string): number => {
	const [, position] = line.match(/\d/g)!;
	return parseInt(position, 10);
};

export const runner = (input: string): number => {
	const [player0Position, player1Position] = input.lines().map(parse);
	const result = diracRoll({
		p1Position: player0Position,
		p2Position: player1Position,
		p1Score: 0,
		p2Score: 0,
		isP1Turn: true,
		rollPhase: 0,
	});
	return Object.values(result).max();
};

// istanbul ignore next
if (require.main === module) {
	(async () => console.log(`Result: ${await bench(read(year, day), runner)}`))(); // 4184 ~0.0036ms
}
import { renderMatrix, Vec2Like } from '@alexaegis/advent-of-code-lib';
import type { Sprite } from '../sprite.class.js';
import type {
	IOBackend,
	KeyboardEventCallback,
	MouseEventCallback,
} from './io-backend.interface.js';

/**
 * The absolute simplest rendering backend, just console logs the entire frame
 */
export class ConsoleLogIOBackend implements IOBackend {
	setTitle(_title: string): void {
		return;
	}

	async init(_resize: (size: Vec2Like) => void): Promise<void> {
		return;
	}

	close(): void {
		return;
	}

	pushFrame(frame: Sprite): void {
		console.log(renderMatrix(frame.render));
	}
	onKeyPress(_callback: KeyboardEventCallback): void {
		return;
	}
	onMouseMove(_callback: MouseEventCallback): void {
		return;
	}
	onTerminateRequest(_callback: () => void): void {
		return;
	}
}
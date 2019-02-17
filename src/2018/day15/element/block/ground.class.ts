import { Block } from './block.class';
import { Creature } from '../creature/creature.class';

export class Ground extends Block {
	_occupant: Creature;

	constructor() {
		super('.');
	}

	set occupant(occupant: Creature) {
		this._occupant = occupant;
		occupant._ground = this;
	}

	get occupant(): Creature {
		return this._occupant;
	}

	toString() {
		return this.occupant ? this.occupant.toString() : super.toString();
	}
}
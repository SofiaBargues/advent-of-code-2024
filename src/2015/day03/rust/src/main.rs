extern crate aoc;

use aoc::Solvable;
use aoc1503::{PartOne, PartTwo};

pub fn main() -> aoc::Result<()> {
	let input = aoc::reader(2015, 3, "input.txt")?;
	let result_part_one = PartOne::solve(&input)?; // 2572, ~231μs
	let result_part_two = PartTwo::solve(&input)?; // 2631, ~256μs

	println!(
		"Results for 2015 Day 3:\n\tPart One: {:?}\n\tPart Two: {:?}",
		result_part_one, result_part_two
	);
	Ok(())
}
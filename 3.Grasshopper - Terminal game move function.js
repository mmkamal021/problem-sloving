/*
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
Example:
move(3, 6) should equal 15
*/

// Here is the solve 1
function move(position, roll) {
  return position + roll * 2
}

// Here is the solve 2
const move = (position, roll) => position + roll * 2

// Here is the solve 3
function move(position, roll) {
  return position + 2 * roll
}

// Here is the solve 4
function move(position, roll) {
  // return the new position by ternary operator
  return roll >= 1 && roll <= 6 ? roll * 2 + position : null
}

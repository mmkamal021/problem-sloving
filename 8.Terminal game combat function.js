/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

// Here is the slove 1
function combat(health, damage) {
  // Write your code here
  return health < damage ? 0 : health - damage
}

// Here is the slove 2
const combat = (health, damage) => {
  if (health < damage) {
    return 0
  } else {
    return health - damage
  }
}
combat()

// Here is the slove 3
// Unsloved
const combat = (health, damage) => Math.max(0, health - damage)

// Here is the slove 4
// Unsloved
function combat(health, damage) {
  if (isNaN(health) || isNaN(damage)) return
  return health > damage ? health - damage : 0
}

/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise . 
*/

// Here is the slove 1
function hero(bullets, dragons) {
  //Get Coding!
  if (bullets >= dragons * 2) {
    return true
  }
  return false
}

// Here is the slove 2
function hero(bullets, dragons) {
  return bullets / 2 >= dragons
}

// Here is the slove 3
function hero(bullets, dragons) {
  return bullets / 2 >= dragons ? true : false
}

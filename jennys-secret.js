// Jenny has written a function that returns a greeting for a user.However,she's in love with Johnny and would like to greet him slightly different.She added a special case to her function, but she made a mistake.

function greet(name) {
  return name !== "Johnny" ? "Hello, " + name + "!" : "Hello, my love!";
}

console.log(greet("Johnn"));
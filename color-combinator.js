/******************
 * YOUR CODE HERE *
 ******************/

function colorCombinator(color1, color2) {
  if (color1 === "red" || color1 === "yellow") {
    if (color2 === "red" || color2 === "yellow") {
      return "orange";
    }
  }
  if (color1 === "red" || color1 === "blue") {
    if (color2 === "red" || color2 === "blue") {
      return "purple";
    }
  }
  if (color1 === "yellow" || color1 === "blue") {
    if (color2 === "yellow" || color2 === "blue") {
      return "green";
    }
  }
}

// Our setup code here. Don't touch!
if (typeof colorCombinator === "undefined") {
  colorCombinator = undefined;
}

module.exports = colorCombinator;

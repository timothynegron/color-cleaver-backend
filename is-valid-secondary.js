/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary(color) {
  if (color === "orange") {
    return true;
  }
  if (color === "purple") {
    return true;
  }
  if (color === "green") {
    return true;
  } else {
    return false;
  }
}

// Our setup code here. Don't touch!
if (typeof isValidSecondary === "undefined") {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;

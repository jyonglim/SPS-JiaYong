var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

/**
 * Exercise - Simple Loop with Variations
 */

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = ``;
  var counter = 0;
  while (counter < 6) {
    myOutputValue += `hello `;
    counter += 1;
  }

  return myOutputValue;
};

/**
 * Exercise - Loop within Loop
 */
var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var myOutputValue = ``;
  var outerCounter = 0;
  while (outerCounter < input) {
    var innerCounter = 0;
    while (innerCounter < input) {
      myOutputValue += `hello `;
      innerCounter += 0.5;
    }
    myOutputValue += `<br/>`;
    outerCounter += 1;
  }
  return myOutputValue;
};

/**
 * Exercise - Infinite Loop
 */

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = ``;
  var outerCounter = 0;
  while (outerCounter < input) {
    var innerCounter = 0;
    while (innerCounter < input) {
      myOutputValue += `hello `;
      innerCounter += 1;
    }
    myOutputValue += `<br/>`;
    outerCounter += 1;
  }
  return myOutputValue;
};

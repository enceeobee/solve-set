// Run with `node test`
const assert = require("assert").strict;

const solveSet = require("./index");

const colors = { red: "red", green: "green", blue: "blue" };
const patterns = { solid: "solid", striped: "striped", empty: "empty" };
const shapes = { diamond: "diamond", tictac: "tictac", squiggle: "squiggle" };

function createPiece(color, number, pattern, shape) {
  return { color, number, pattern, shape };
}

const { red, green, blue } = colors;
const { solid, striped, empty } = patterns;
const { diamond, tictac, squiggle } = shapes;

let pieces = [
  createPiece(green, 3, solid, squiggle),
  createPiece(red, 2, empty, squiggle),
  createPiece(red, 2, solid, squiggle),
  createPiece(red, 1, striped, squiggle),
  createPiece(blue, 1, striped, squiggle),
  createPiece(green, 1, empty, squiggle),
  createPiece(blue, 2, solid, squiggle),
  createPiece(red, 3, striped, squiggle),
  createPiece(red, 2, striped, squiggle),
];

let actual = solveSet(pieces);

assert.equal(actual.length, 4);

// Test 2

pieces = [
  createPiece(red, 1, empty, tictac),
  createPiece(green, 3, striped, tictac),
  createPiece(red, 2, striped, tictac),
  createPiece(green, 3, empty, tictac),
  createPiece(blue, 3, empty, tictac),
  createPiece(green, 2, solid, tictac),
  createPiece(red, 3, solid, tictac),
  createPiece(green, 1, striped, tictac),
  createPiece(green, 2, empty, tictac),
];

actual = solveSet(pieces);

console.log("actual", actual); // TODO: Remove

assert.equal(actual.length, 4);

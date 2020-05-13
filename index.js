function solveSet(pieces = []) {
  const sets = [];

  // BRUTE FORCE
  for (let i = 0; i < pieces.length - 2; i++) {
    for (let j = i + 1; j < pieces.length - 1; j++) {
      for (let k = j + 1; k < pieces.length; k++) {
        const possibleSet = [pieces[i], pieces[j], pieces[k]];
        if (isSet(possibleSet)) sets.push(possibleSet);
      }
    }
  }

  return sets;
}

function isSet(pieces = []) {
  const [firstPiece, secondPiece, thirdPiece] = pieces;

  let colorsCount = 1;
  if (firstPiece.color === secondPiece.color) colorsCount++;
  if (firstPiece.color === thirdPiece.color) colorsCount++;
  if (secondPiece.color === thirdPiece.color) colorsCount++;
  if (colorsCount === 2) return false;

  let numbersCount = 1;
  if (firstPiece.number === secondPiece.number) numbersCount++;
  if (firstPiece.number === thirdPiece.number) numbersCount++;
  if (secondPiece.number === thirdPiece.number) numbersCount++;
  if (numbersCount === 2) return false;

  let patternCount = 1;
  if (firstPiece.pattern === secondPiece.pattern) patternCount++;
  if (firstPiece.pattern === thirdPiece.pattern) patternCount++;
  if (secondPiece.pattern === thirdPiece.pattern) patternCount++;
  if (patternCount === 2) return false;

  let shapeCount = 1;
  if (firstPiece.shape === secondPiece.shape) shapeCount++;
  if (firstPiece.shape === thirdPiece.shape) shapeCount++;
  if (secondPiece.shape === thirdPiece.shape) shapeCount++;
  if (shapeCount === 2) return false;

  return true;
}

module.exports = solveSet;

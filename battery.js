var calPoints = function (ops) {
  const stack = [];

  for (const op of ops) {
    if (op === "C") {
      stack.pop(); // Remove the last score (invalidate it)
    } else if (op === "D") {
      stack.push(stack[stack.length - 1] * 2); // Double the last score
    } else if (op === "+") {
      const lastScore = stack[stack.length - 1];
      const secondLastScore = stack[stack.length - 2];
      stack.push(lastScore + secondLastScore); // Add the sum of the last two scores
    } else {
      stack.push(parseInt(op)); // Add the score to the stack
    }
  }

  return stack.reduce((sum, score) => sum + score, 0); // Sum up all the scores in the stack
};

console.log(calPoints(ops)); // Output: 30

// /**
//  *
//  * @input {num} to print fibonacci series upto 10
//  * @output [0,1,1,2,3...34]
//  */

// function fibonacci(num) {
//   /** to store  values of fibonacci series */
//   const result = [0, 1];
//   // condition to get the remainig values of fibonacci series
//   for (let i = 2; i < num; i++) {
//     //to calculate current value based previous two values
//     const value = result[i - 1] + result[i - 2];
//     result.push(value);
//   }
//   return result;
// }
// const output = fibonacci(10);
// console.log(output);

/**
 * Generates the Fibonacci sequence up to the specified number of terms.
 *
 * @param {number} num - Number of Fibonacci terms to generate.
 * @returns {number[]} Array containing the Fibonacci sequence.
 *
 * Example:
 * fibonacci(10)
 * Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 */

function fibonacci(num) {
  // Initialize the sequence with the first two Fibonacci numbers
  const result = [0, 1];

  // Generate the remaining Fibonacci numbers
  for (let i = 2; i < num; i++) {
    // Current number = sum of the previous two numbers
    const value = result[i - 1] + result[i - 2];

    // Add the new Fibonacci number to the sequence
    result.push(value);
  }

  // Return the complete Fibonacci sequence
  return result;
}

const output = fibonacci(10);
console.log(output);
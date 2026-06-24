/**
 *
 * @input num-->value to determine factorial
 *
 * @output returns a calculated factorial of a given value
 *
 */

function factorial(num) {
  let result = 0;
  for (let i = num; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

const result = factorial(5);
console.log({ result });

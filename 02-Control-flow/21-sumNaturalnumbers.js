function sumofNaturalNumbers(num) {
  // Variable to store the total sum
  let sum = 0;

  // Loop from 1 up to the given number
  for (let i = 1; i <= num; i++) {
    // Add the current number to the sum
    sum = sum + i;
  }

  // Return the final sum
  return sum;
}

console.log(sumofNaturalNumbers(3)); // Output: 6

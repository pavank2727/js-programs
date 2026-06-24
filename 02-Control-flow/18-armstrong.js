function armstrong(num) {
  // Convert the number into an array of digits
  // Example: 153 -> [1, 5, 3]
  let numArr = num
    .toString()
    .split("")
    .map((item) => Number(item));

  // Find the number of digits in an array
  // Example: [1, 5, 3] -> 3
  let length = numArr.length;

  // Variable to store the sum of each digit raised to the power of length
  let sum = 0;

  // Loop through each digit in the array
  for (let i = 0; i < length; i++) {
    // Raise the current digit to the power of length
    // and add it to the sum
    sum = sum + Math.pow(numArr[i], length);
  }

  // Check whether the calculated sum is equal to the original number
  // If equal, it is an Armstrong number
  return sum === num;
}

console.log(armstrong(153));

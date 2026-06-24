  // Function to check whether a given number is an Armstrong number
  function armstrong(num) {
    // Convert the number into an array of digits
    // Example: 153 → [1, 5, 3]
    let numArr = num
      .toString()
      .split("")
      .map((item) => Number(item));


    // Get the total number of digits
    // Example: [1, 5, 3] → 3
    let length = numArr.length;

    // Store the sum of digits raised to the power of the digit count
    let sum = 0;

    // Iterate through each digit in the array
    for (let i = 0; i < length; i++) {
      // Raise the current digit to the power of 'length'
      // and add the result to the running sum
      sum = sum + Math.pow(numArr[i], length);
    }

    // Return true if the calculated sum matches the original number
    return sum === num;
  }

  // Function to find all Armstrong numbers within a given range
  function armInterval(start, end) {
    // Array to store the Armstrong numbers found in the interval
    let armstrongNumbers = [];

    // Check every number from start to end
    for (let i = start; i <= end; i++) {
      // If the current number is an Armstrong number,
      // add it to the result array
      if (armstrong(i)) {
        armstrongNumbers.push(i);
      }
    }

    // Return the list of Armstrong numbers
    return armstrongNumbers;
  }

  console.log(armInterval(100, 15500));

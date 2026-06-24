function findHcf(num1, num2) {
  // Store the highest common factor found so far
  let hcf = 1;

  // Check every number from 1 up to the smaller input value
  for (let i = 1; i <= num1 && i <= num2; i++) {
    // If i divides both numbers exactly, it is a common factor
    if (num1 % i === 0 && num2 % i === 0) {
      // Update hcf with the latest common factor found
      hcf = i;
    }
  }

  // Return the greatest common factor
  return hcf;
}

console.log(findHcf(12, 18)); // 6

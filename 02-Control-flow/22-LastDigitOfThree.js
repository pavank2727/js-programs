function compareLastDigits(num1, num2, num3) {
  // Find the last digit of each number using the modulus operator (%)
  let digit1 = num1 % 10;
  let digit2 = num2 % 10;
  let digit3 = num3 % 10;

  // Compare the last digits of all three numbers
  if (digit1 === digit2 && digit2 === digit3) {
    return "The three numbers have the same last digit";
  } else {
    return false;
  }
}
console.log(compareLastDigits(53, 33, 83));
console.log(compareLastDigits(76, 96, 99));

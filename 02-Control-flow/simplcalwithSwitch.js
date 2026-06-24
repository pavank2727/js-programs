function calculator(number1, number2, operator) {
  // Store the calculation result
  let result;

  // Perform the selected operation
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;

    case "-":
      result = number1 - number2;
      break;

    case "*":
      result = number1 * number2;
      break;

    case "/":
      result = number1 / number2;
      break;

    default:
      console.log("Invalid operator");
      return;
  }

  // Display the result
  return `${number1} ${operator} ${number2} = ${result}`;
}
console.log(calculator(7, 8, "&"));

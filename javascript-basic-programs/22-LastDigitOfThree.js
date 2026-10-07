const compareNumbers = (num1, num2, num3) => {
  let a = num1 % 10;
  let b = num2 % 10;
  let c = num3 % 10;
  if (a === b && b === c) {
    return "These numbers have same last digits ";
  } else {
    return "Not Equal";
  }
};

console.log(compareNumbers(33, 33, 63));

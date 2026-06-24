function checkEvenorOdd(num) {
  if (num % 2 === 0) {
    return `Entered num is ${num} , and ${num} is Even`;
  } else {
    return `Entered num is ${num}, ${num} is odd`;
  }

}
console.log(checkEvenorOdd(2));
console.log(checkEvenorOdd(5));
console.log(checkEvenorOdd(1));




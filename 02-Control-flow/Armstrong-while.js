// let num = 153;
export function getNumbers(num) {
  const extractedNumbers = [];

  while (num > 0) {
    let remainder = num % 10;
    extractedNumbers.push(remainder);

    num = num - remainder;
    num = num / 10;
    // console.log(num);
  }
  return extractedNumbers;
}
// const result = getNumbers(153);

export function getLength(num) {
  const numbers = getNumbers(num);
  let length = 0;
  for (let v of numbers) {
    length += 1;
  }

  return length;
}

export function getExponential(base, power) {
  let expoValue = 1;
  for (let i = 1; i <= power; i++) {
    expoValue = expoValue * base;
  }
  return expoValue;
}
function getSum(num) {
  let sum = 0;
  let numbers = getNumbers(num);
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

export function isArmstrongNumber(num) {
  let numbers = getNumbers(num);
  let length = getLength(num);
  let sum = 0;
  for (let number of numbers) {
    const exponentialValue = getExponential(number, length);
    sum += exponentialValue;
  }

  
  return sum === num;
}

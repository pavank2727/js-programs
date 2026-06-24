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
console.log(getExponential(2,3));


// function getSum(num){

// let sum=0;

// for()
// }
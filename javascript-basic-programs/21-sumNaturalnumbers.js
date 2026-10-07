const sumOfNaturalNumbers = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

const result = sumOfNaturalNumbers(5);
console.log(result);

const sum = () => {
  let a=3, b=4;
  return a + b;
};
console.log(sum());

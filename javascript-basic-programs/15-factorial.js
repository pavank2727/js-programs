const factorial = (num) => {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result = result * i;
  }
  return result;
};

const value = factorial(5);
console.log(value);
console.log({ value });




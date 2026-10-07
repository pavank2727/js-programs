const fibonacci = () => {
  let result = [0, 1];

  for (let i = 2; i < 12; i++) {
    let value = result[i - 1] + result[i - 2];
    result.push(value);
  }
  return result;
};

let fibonacciValue = fibonacci();
console.log(fibonacciValue);

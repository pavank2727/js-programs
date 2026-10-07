const sumOfSeries = (n) => {
  // code here
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i * i * i;
  }
  return sum;
};
const result = sumOfSeries(5);
console.log(result);

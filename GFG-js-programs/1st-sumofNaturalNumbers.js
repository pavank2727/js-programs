// https://www.geeksforgeeks.org/problems/reverse-coding2452/1
const sumOfNaturalNum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};
console.log(sumOfNaturalNum(6));

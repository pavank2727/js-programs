function findFactorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * findFactorial(num - 1);
  }
}
let result = findFactorial(5);
console.log(result);

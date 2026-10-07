function findLcm(num1, num2) {
  let max = Math.max(num1, num2);

  while (true) {
    if (max % num1 === 0 && max % num2 === 0) {
      return max;
    }
    max++;
  }
}
let result = findLcm(2, 4);
console.log(result);

const findHcf = (num1, num2) => {
  let hcf = 1;

  for (let i = 1; i < Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      hcf = i;
    }
  }
  return hcf;
};
const result = findHcf(12, 18);
console.log(result); // 6

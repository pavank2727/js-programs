const gcd = (a, b) => {
  let result = 1;

  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }

  return result;
};

const result = gcd(28, 20);
console.log(result);

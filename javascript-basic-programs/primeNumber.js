function primenumber(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) if (num % i === 0) return false;

  return true;
}

function getPrimeNumbers(start, end) {
  const primeNumbers = [];
  for (let i = start; i <= end; i++) {
    if (primenumber(i)) {
      primeNumbers.push(i);
    }
  }
  const length = primeNumbers.length;

  return {primeNumbers, length};
}

const result = getPrimeNumbers(1, 10);
console.log(result);

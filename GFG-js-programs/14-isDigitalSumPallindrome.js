const isDigitSumPalindrome = (n) => {
  // code here
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum = sum + digit;
    n = Math.floor(n / 10);
  }
  let original = String(sum);
  let reversed = original.split("").reverse().join("");
  return original === reversed;
};

const result = isDigitSumPalindrome(56);
console.log(result);

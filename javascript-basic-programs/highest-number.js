function largestNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return `${num1} is the highest number`;
  } else if (num2 > num1 && num2 < num3) {
    return `${num2} is the highest number`;
  } else return `${num3} is the highest number`;
}
console.log(largestNumber(4, 3, 6));
console.log(largestNumber(5, 4, 3));
console.log(largestNumber(7, 4, 6));

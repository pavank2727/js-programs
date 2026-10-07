function binaryNum(num) {
  let binary = "";

  while (num > 0) {
    let remainder = num % 2;
    binary = remainder + binary;
    num = num - remainder;
    num = num / 2;
  }
  return binary;
}
const result = binaryNum(13);
console.log(result);

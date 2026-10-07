const armStrong = (num) => {
  const numArr = num
    .toString()
    .split()
    .map((number) => Number(number));
  const length = numArr.length;

  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum = sum + Math.pow(numArr[i], length);
  }

  return sum === num;
};
const result = armStrong(153);
console.log(result);

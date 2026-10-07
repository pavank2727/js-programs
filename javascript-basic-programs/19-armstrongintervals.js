const armStrong = (num) => {
  const numArr = num
    .toString()
    .split("")
    .map((number) => Number(number));
  const length = numArr.length;

  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum += Math.pow(numArr[i], length);
  }
  return sum === num;
};

const armStrongInterval = (start, end) => {
  let armStrongNumbers = [];
  for (let i = start; i < end; i++) {
    if (armStrong(i)) {
      armStrongNumbers.push(i);
    }
  }

  return armStrongNumbers;
};

const result = armStrongInterval(100, 200);
console.log(result);

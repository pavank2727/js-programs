const middleNum = (a, b, c) => {
  if ((a >= b && a <= c) || (a <= b && a >= c)) {
    return `${a} is the middle number`;
  } else if ((b >= a && b <= c) || (b <= a && b >= c)) {
    return `${b} is the middle number`;
  } else {
    return `${b} is the middle number`;
  }
};
const result = middleNum(2, 6, 1);
console.log(result);

// const middleNumber = (arr) => {
  
//   arr.sort((a, b) => a - b );
//   return arr[1];
// };
// let arr = [4, 3, 5];
// console.log(middleNumber(arr));

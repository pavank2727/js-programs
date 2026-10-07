const avgArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let mean = sum / arr.length;
  return Math.floor(mean);
};
const arr = [3, 2];
console.log(avgArray(arr));

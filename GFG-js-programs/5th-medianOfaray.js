class Solution {
  findMedian(arr) {
    // code here.

    arr.sort((a, b) => a - b);

    let n = arr.length;

    if (n % 2 !== 0) {
      return arr[Math.floor(n / 2)];
    }

    let middle1 = arr[n / 2 - 1];
    let middle2 = arr[n / 2];

    return (middle1 + middle2) / 2;
  }
}
const solution = new Solution();

const arr = [90, 100, 78, 89, 67];

console.log(solution.findMedian(arr));

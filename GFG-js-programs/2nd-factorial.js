// https://www.geeksforgeeks.org/problems/factorial5739/1
class Solution {
  factorial(n) {
    // lcode here
    let result = 1;

    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
  }
}
const solution = new Solution();
console.log(solution.factorial(5));

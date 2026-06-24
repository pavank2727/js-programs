import { isArmstrongNumber } from "./Armstrong-while";

function rangeArmStrong(start, end) {
  let armStrongNumbers = [];
  for (let i = start; i <= end; i++) {
    if (isArmstrongNumber(i)) {
      armStrongNumbers.push(i);
    }
  }
  return armStrongNumbers;
}
const result = rangeArmStrong(1, 7000);
console.log(result);

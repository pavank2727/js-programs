function sum(num) {
  if (num > 0) {
    return num + sum(num - 1);
  } else return num;
}
const result = sum(2);
console.log(result);

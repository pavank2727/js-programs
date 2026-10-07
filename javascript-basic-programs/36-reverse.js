function reverse(value) {
  value = value + "";
  let reverseValue = "";
  for (let i = value.length - 1; i >= 0; i--) {
    reverseValue += value[i];
  }
  return reverseValue;
}
const result = reverse(346554);
console.log(result);

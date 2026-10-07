function polindrome(input) {
  input = input + "";
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed = reversed + input[i];
  }
  return input=== reversed;
}
const result = polindrome("jajaka");
console.log(result);

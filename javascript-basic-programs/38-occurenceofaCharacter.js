function charOccurence(str, target) {
  let char = 0;
  for (let i = 1; i <= str.length; i++) {
    if ((target === str[i])) {
      char = char + 1;
    }
  }
  return char;
}
console.log(charOccurence("banana", "a"));

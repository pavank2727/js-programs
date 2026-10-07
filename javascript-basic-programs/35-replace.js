function replaceChar(char, oldChar, newChar) {
  let result = "";

  for (let i = 0; i < char.length; i++) {
    if (char[i] === oldChar) {
      result += newChar;
    } else {
      result += char[i];
    }
  }

  return result;
}

console.log(replaceChar("banana", "a", "@"));

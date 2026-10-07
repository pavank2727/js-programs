///////// Convert string to array of characters

function getCharacters(str) {
  let char = [];
  for (let value of str) {
    char.push(value);
  }

  //   for(let i=0;i<str.length;i++){
  //     // char.push(str[i])
  //     char[i]=str[i]
  //   }
  return char;
}

// Sort the array

function sortCharacters(chars) {
  for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      if (chars[i] > chars[j]) {
        [chars[i], chars[j]] = [chars[j], chars[i]];
      }
    }
  }
  return chars;
}

//concert back to string
function buildString(chars) {
  let result = "";

  for (let i = 0; i < chars.length; i++) {
    result = result + chars[i];
  }

  return result;
}

let characters = getCharacters("AMAN");
let sortedCharacters = sortCharacters(characters);
let result = buildString(sortedCharacters);
console.log(result);

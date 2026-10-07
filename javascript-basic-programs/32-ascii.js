function getAscii(str) {
  let ascii=[];
  for (let i = 0; i <= str.length - 1; i++) {
    ascii.push(str[i] ,str.charCodeAt(i));
  }
  return ascii;
}
const result = getAscii("PAVAM");
console.log(result);

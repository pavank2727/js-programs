const table = (num) => {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    const product = num * i;
    result += `${num} X ${i} = ${product}\n`;
  }
  return result;
};
const finalTable = table(3);

console.log(finalTable);

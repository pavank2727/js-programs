const countSquares = (num) => {
  let count = 0;
  for (let i = 0; i * i < num; i++) {
    count++;
  }
  return count;
};
const result = countSquares(25);
console.log(result);

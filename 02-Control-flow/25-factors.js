function findFactor(num) {
  console.log(num);

  let factorsArr = [];
  for (let i = 1; i < num ; i++) {
    if (num % i === 0) {
      factorsArr.push(i);
    }
  }
  return { [num]: factorsArr };
}

function factorRange(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
     arr.push(
        findFactor(i)
     );
  }
  return { arr };
}
const result = factorRange(1, 999999);
console.log(result);

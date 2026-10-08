const isPower = (a, b) => {
  if (a === 1) {
    return b === 1;
  }
  let result = 1;
  while (result < b) {
    result = result * a;
  }
  return result === b;
};

const result = isPower(1, 4);
console.log(result);

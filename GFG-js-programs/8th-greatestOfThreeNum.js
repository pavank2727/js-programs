const greatestThreeNums = (a, b, c) => {
  if (a > b && a > c) {
    return `${a} is the greatest number`;
  } else if (b > c && b > a) {
    return `${b} is the greatest number`;
  } else {
    return `${c} is the greatest number`;
  }
};

console.log(greatestThreeNums(-3, -9, -1));

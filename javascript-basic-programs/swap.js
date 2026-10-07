function swap(num1, num2) {
  const temp = num1;
  num1 = num2;
  num2 = temp;
  console.log(`after swap num1 is ${num1}`);
  console.log(`after swap num2 is ${num2}`);
  return {num1, num2};
}

swap(2, 3);

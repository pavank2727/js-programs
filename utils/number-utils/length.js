export function getLength(num) {
  const numbers = getNumbers(num);
  let length = 0;
  for (let v of numbers) {
    length += 1;
  }

  return length;
}
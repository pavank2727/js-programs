function solveQuadratic(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    return `The roots are ${root1} and ${root2}`;
  } else if (discriminant === 0) {
    const root = -b / (2 * a);

    return `The roots are ${root} and ${root}`;
  } else {
    const realPart = (-b / (2 * a)).toFixed(2);
    const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    return `The roots are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`;
  }
}

console.log(solveQuadratic(1, -5, 6));
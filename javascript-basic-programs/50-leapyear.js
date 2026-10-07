const leapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return "Leap Year";
  } else if (year % 400 === 0) {
    return "Leap Year";
  } else {
    return "Not a leap Year";
  }
};
const result = leapYear(2000);
console.log(result);

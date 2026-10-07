// const user = {
//   name: "Jack",
//   age: 26,
//   greet() {
//     console.log("hello Mr" + this.name);
//   },
// };

// user.greet();
// ////

// function showName() {
//   console.log(this.name);
// }

// const user1 = {
//   name: "Pavan",
//   showName: showName,
// };

// const user2 = {
//   name: "Rahul",
//   showName: showName,
// };
// user1.showName();
// user2.showName();

// ///

// function showThis() {
//   console.log(this);
// }

// showThis(); //undefined

// ////////

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const student1 = new Student("Pavan");

// console.log(student1.name);
// console.log(student1.age);

// /////////
// ///Arrow functions this keyword
// const user6 = {
//   name: "Pavan",

//   showNames: () => {
//     console.log(this.name);
//   },
// };

// user6.showNames();

///////////

const user = {
  name: "James",
  age: 24,
  childObj: {
    newName: "Cameron",
    getDetails() {
      console.log(this.newName + " and " + this.name);
    },
  },
};

user.childObj.getDetails();

///// with arrow function

const user1 = {
  name: "James",
  age: 24,

  // getDetails: () => {
  //   console.log(this.name);
  // },
  //output is undefined

  getDetails() {
    const arrFunction = () => {
      console.log(this.name);
    };
    arrFunction();
  },
};

user1.getDetails();

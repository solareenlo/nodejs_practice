let square = x => x * x;
console.log(square(9));

let user = {
  name: 'solareenlo',
  sayHi: () => {
    console.log(`Hi, I'm ${this.name}`);
    console.log(arguments);
  },
  sayHiAlt () {
    console.log(`Hi, I'm ${this.name}`);
    console.log(arguments);
  }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);

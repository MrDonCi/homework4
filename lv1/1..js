const user = { name: "John", age: 30 };

const { name, age, isAdmin = false } = user

console.log(name);

console.log(age);

console.log(isAdmin);
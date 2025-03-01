/*
const person = { name: "Adam", age: 25, gender: "male" };
console.log(person.name, person.age, person.gender);
*/
/////////////////////////////////////////////
/*
const person = { name: "Adam", age: 25 };
person.gender = "male";
console.log(person);
*/
/////////////////////////////////////////////
/*
const person = { name: "Adam", age: 25 };
person["gender"] = "male";
console.log(person);
*/
/////////////////////////////////////////////
/*
const person = { name: "Adam", age: 25 };
console.log(person.name);
*/
/////////////////////////////////////////////
/*
const person = { name: "Adam", age: 25 };
console.log(person["name"]);
*/
/////////////////////////////////////////////
/*
const person = { name: "Adam", age: 25, gender: "male" };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
*/
/////////////////////////////////////////////
/*
const person = { name: "Adam", age: 25, gender: "male" };
const keys = Object.keys(person);
console.log(keys);
*/
/////////////////////////////////////////////
/*
const person = { name: "Adam", age: 25, gender: "male" };
const values = Object.values(person);
console.log(values);
*/
/////////////////////////////////////////////
/*
const person = { name: "Adam", age: 25, gender: "male" };
const entries = Object.entries(person);
console.log(entries);
*/
/////////////////////////////////////////////
/*
const obj1 = { name: "Adam", age: 25 };
const obj2 = { gender: "male" };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);
*/
/////////////////////////////////////////////
/*
const person = { name: "Adam", age: 25 };
Object.freeze(person);
person.age = 30;
person.gender = "male";
console.log(person);
*/
/////////////////////////////////////////////
/*
const person = { name: "Adam", age: 25 };
Object.seal(person);
person.age = 30;
person.gender = "male";
console.log(person);
*/
/////////////////////////////////////////////

/*
let str="Welcome to Orange"
let y1= str.toUpperCase()
console.log(y1)
let result = str.slice(8, 10).toUpperCase();
console.log(result);let y=str.replace("Welcome to","hello from")
console.log(y)
let y2=str.toLowerCase()
console.log(y2)
console.log(str.length)
let y3="Welcome to \"Orange\"".trim()
console.log(y3)
let str1="Jordan"
let y4=str.concat(" ",str1)
console.log(y4)
*/
/////////////////////
/*
let str = "cactus"
let y = str.slice(0, 2) + "*" + str.slice(3)
console.log(y)
*/
///////////////////////
/*
let arr=["codeing","academy","by","orange"]
console.log(arr)
arr.push("jordan")
console.log(arr)
n_arr=arr.slice(0,2)
console.log(n_arr)
arr.unshift("To")
arr.unshift("WELCOME")
console.log(arr)
n1_arr=arr.slice(2,4)
console.log(n1_arr)
let n2_arr = arr.join(" ")
console.log(n2_arr)
*/
/////////////
/*
var fruits=["banana","apple","orange","watermelon"]
var vegetables=["carrot","tomato","pepper","lettuce"]
vegetables.pop()
console.log(vegetables)
fruits.shift()
console.log(fruits)
fruits.findIndex("orange");
console.log(fruits)
*/
////////////////
/*
function arr(str){
    return str.split(" ")
}
y="hi my name is omar"
console.log(arr(y))
*/
///////////
/*
function coneverting(str){
    return str.substr(0,6).replace(/./g, "*")+str.substr(6)
}
console.log(coneverting("0798727686"))
*/
/////////////////////
/*
function hideEmail(email) {
    let parts = email.split("@")
    let name = parts[0].slice(0, 6) + '...'
    let domain = parts[1]
    return name + '@' + domain
}
console.log(hideEmail("orange_academy@orange.jo"))
*/
////////////////////////
/*
function upper(str){
    return str.substr(0,1).toUpperCase()+str.substr(1)
}
console.log(upper("omar"))
*/
////////////////////////////
/*
function capitalizeWords(str) {
    let words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join(' ')
}
console.log(capitalizeWords("omar alshahed"))
*/
/////////////////////////////
/*
function reverse(str){
    let reversstr=''
    for(let i=str.length-1;i>=0;i--){
        reversstr+=str[i]
    }
    return reversstr
}
console.log(reverse("123456789"))
*/
///////////////////////////
/*
function flip(a,b){
    n_a=(a/a)*b;
    n_b=(b/b)*a;
    return [n_a,n_b];
}
console.log(flip(5,6))
*/
////////////////////
/*
function del(str, pos) {
    let res = str.slice(0, pos) + str.slice(pos + 1)
    return res
}
console.log(del("Orange", 5))
*/
////////////////////////////////
/*
function mergeStrings(str1, str2) {
    let modifiedStr1 = str1.slice(1)
    let modifiedStr2 = str2.slice(1)
    return modifiedStr1 + modifiedStr2
}

console.log(mergeStrings("lora","inge")) 
*/
///////////////////////////////
/*
function checkFirstOrLast(char, str) {
    return str.startsWith(char) || str.endsWith(char)
}

console.log(checkFirstOrLast("o", "orange"))
console.log(checkFirstOrLast("z", "orange"))
*/
///////////////////////////
/*
function stringToArray(str) {
    return str.split(' ')
}

console.log(stringToArray("Coding Academy by Orange"))
*/
/////////////////////////////////
/*
function alphabeticalOrder(str) {
    return str.split('').sort().join('')
}

console.log(alphabeticalOrder("Orange")) 
*/
/////////////////////////
/*
let x=prompt("enter your age")
if(x>30 && x<60){
    console.log("You are not eligible. You may join other programs.")
}
else if(x>18 && x<30){
    console.log("You are eligible. Start your application.")
}
else if(x<18){
    console.log("You may join the kids program.")
}
else(60<x){
    console.log("You may join the seniors program.")
}
*/
//////////////////////////////
/*
let str = "OrAnGe"
let result = ''
for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char === char.toUpperCase()) {
        result += char.toLowerCase()
    } else {
        result += char.toUpperCase()
    }
}
console.log(result)
*/
////////////////////
/*
function capitalizeWords(str) {
    let words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join('')
}
console.log(capitalizeWords("omar mutamsem mahmoud hisham alshahed"))
*/
///////////////////////////
/*
function removeElement(arr, element) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== element) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(removeElement(["Coding", "Academy", "By", "Orange"], "By"))
*/
///////////////////////////////////
/*
let num=prompt("enter a number")
if(num%2==0){
    console.log("even")
}
else{
    console.log("odd")
}
*/
/////////////////////////////////
/*
let x=prompt("enter anything")
if(!isNaN(x)){
    console.log("its number")
}
else{
    console.log("it is not number")
}
*/
///////////////////////////
/*
function findLargest(a, b) {
    return (a > b) ? a : b
}
console.log(findLargest(5, 8))
*/
////////////////////////////////
/*
function triangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral"
    } else if (a === b || b === c || a === c) {
        return "Isosceles"
    } else {
        return "Scalene"
    }
}
console.log(triangleType(3, 3, 3))
console.log(triangleType(3, 4, 3))
console.log(triangleType(3, 4, 5))
*/
///////////////////////////////////
/*
function isInRange(number, start, end) {
    return number >= start && number <= end
}

console.log(isInRange(5, 1, 10))
console.log(isInRange(15, 1, 10))
*/
//////////////////////////////////////
/*
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

console.log(isLeapYear(2024))
console.log(isLeapYear(2023))
*/
////////////////////////////////////
/*
console.log("Using for loop:")
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
console.log("Using while loop:")
let j = 1;
while (j <= 50) {
    if (j % 2 === 0) {
        console.log(j)
    }
    j++
}
*/
//////////////////////////////////
/*
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
} 
*/
/////////////////////////////////
/*
console.log("Using for loop:")
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
console.log("Using while loop:")
let j = 1;
while (j <= 50) {
    if (j % 2 === 1) {
        console.log(j)
    }
    j++
}
*/
//////////////////////////////////////
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
*/
//////////////////////////////////////
/*
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}
for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
}
*/
////////////////////////////////////////////
/*
function fizzBuzzRecursive(num, limit = 100) {
    if (num > limit) return;
    
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
    
    fizzBuzzRecursive(num + 1, limit);
}
fizzBuzzRecursive(1);
*/
//////////////////////////////////////////////////
/*
function convertToBanknotes(amount, banknotes) {
    let result = [];
    for (let note of banknotes) {
        while (amount >= note) {
            result.push(note);
            amount -= note;
        }
    }
    return result;
}

console.log(convertToBanknotes(57, [25, 10, 5, 1])); 
*/
////////////////////////////////
/*
function countCharacter(str, char) {
    let count = 0;
    let lowerStr = str.toLowerCase();
    let lowerChar = char.toLowerCase();
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerChar) {
            count++;
        }
    }
    return count;
}
console.log(countCharacter("Coding Academy by Orange", "o")); 
*/
/*
for (let i = 1; i <= 10; i++) {
    process.stdout.write(i + " ");
}
*/
///////////////////////////////
/*
let i = 1;
while (i <= 10) {
    process.stdout.write(i + ' ');
    i++;
}
*/
////////////////////////////////
/*
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + ' ');
}
*/
////////////////////////////////
/*
for (let i = 0; i <= 10; i += 2) {
    process.stdout.write(i + ' ');
}
*/
////////////////////////////////
/*
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
*/
////////////////////////////////
/*
const arr = [1, 2, 3, 4, 5];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);
*/
////////////////////////////////
/*
const arr = [5, 4, 3, 2, 1];
let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log(smallest);
*/
////////////////////////////////
/*
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let average = sum / arr.length;
console.log(average);
*/
////////////////////////////////
/*
const number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log(factorial);
*/
////////////////////////////////
/*
const num = 10;
let a = 0, b = 1, nextTerm;
console.log(a + ' ' + b);
for (let i = 1; i <= num - 2; i++) {
    nextTerm = a + b;
    console.log(nextTerm);
    a = b;
    b = nextTerm;
}
*/
////////////////////////////////
/*
const n = 20;
for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}
*/
////////////////////////////////
/*
const num = 5;  // Change this number to print the table for any other number
for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}
*/
////////////////////////////////
/*
const arr2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < arr2D.length; i++) {
    for (let j = 0; j < arr2D[i].length; j++) {
        process.stdout.write(arr2D[i][j] + ' ');
    }
}
*/
////////////////////////////////
/*
const arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >= 0; i--) {
    process.stdout.write(arr[i] + ' ');
}
*/
////////////////////////////////
/*
const arr = [1, 2, 3, 4, 5];
const start = 2;
const end = 4;
for (let i = start; i <= end; i++) {
    process.stdout.write(arr[i] + ' ');
}
*/
////////////////////////////////
/*
const arr = [1, 2, 3, 4, 5];
const step = 2;
for (let i = 0; i < arr.length; i += step) {
    process.stdout.write(arr[i] + ' ');
}
*/
////////////////////////////////
/*
const arr = [1, 2, 3, 4, 5];
const target = 4;
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        found = true;
        break;
    }
}
console.log(found);
*/
////////////////////////////////
/*
const arr = [1, 2, 3, 4, 5, 4, 4];
const target = 4;
let frequency = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        frequency++;
    }
}
console.log(frequency);
*/
////////////////////////////////

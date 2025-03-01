/*
function smallest(numbers) {
    let small = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < small) {
            small = numbers[i];
        }
    }
    return small;
}
console.log(smallest([30, 5, 7, 2, 1])); 
*/
///////////////////////////////////////
/*
function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
  }
  console.log(sortStringAlphabetically('Hello WOrld!')); 
  */
 ///////////////////////////////////////
 /*
 function factorial(num){
    result=1
    if(num>0){
        for(let i=num;i>0;i--){
           result*=i
        }
        console.log("factorial of "+num+"is"+result)
        return result
    }
    else{
        console.log("the number is not valid")
        return null
    }
 }
 let x=prompt("enter positive number")
 let num = parseInt(x)
 console.log(factorial(5))
 */
/////////////////////////////////
/*
function EorO(num){
    if(num%2==0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}
console.log(EorO(9))
console.log(EorO(2))
console.log(EorO(5))
*/
////////////////////////////////
/*
function evenarr(myarr){
 let evenArr=[]
 for(let i=0;i<myarr.length;i++){
    if(myarr[i]%2==0){
        evenArr.push(myarr[i])
    }
    }
    return evenArr
}
console.log(evenarr([1,2,3,4,5,6,7,8,9]))
*/
////////////////////////////////
/*
function numbersOnly(arr) {
    return arr.filter(item => typeof item !== 'string')
}
console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding']))
*/
//////////////////////////////////////
/*
function addUp(num) {
    let sum = 0
    for (let i = num; i >= 0; i--) {
        sum += i
    }
    return sum;
}
console.log(addUp(8))
*/
//////////////////////////////////
/*
function arrayAnalysis(arr) {
    let sum = arr.reduce((a, b) => a + b, 0)
    return [Math.min(...arr), Math.max(...arr), arr.length, sum / arr.length]
}
console.log(arrayAnalysis([1, 2, 3, 4, 5, 6, 7, 8, 9]))
*/
////////////////////////////////////
/*
function romanNumbers(num) {
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ]
    let result = ""
    for (const [letter, value] of romanNumerals) {
        while (num >= value) {
            result += letter
            num -= value
        }
    }
    return result
}
console.log(romanNumbers(1989))
*/
////////////////////////////////////////
/*
function countWords(str) {
    return str.split(' ').filter(word => word.length > 0).length
}
console.log(countWords('hello from CodingAcademy!'))
*/
/////////////////////////////////////////
/*
function multiplyByLength(arr) {
    return arr.map(item => item * arr.length);
}
console.log(multiplyByLength([4, 2, 5]));
*/
//////////////////////////////
/*
function checkEnding(str1, str2) {
    return str1.endsWith(str2)
}
console.log(checkEnding("CodingSchool", "Ac"))
console.log(checkEnding("CodingSchool", "School"))
*/
//////////////////////////////////////////
/*
function doubleChar(str) {
    return str.split('').map(char => char + char).join('')
}
console.log(doubleChar('Coding'))
*/
////////////////////////////
/*
function findIndex(arr, element) {
    return arr.indexOf(element);
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')); 
*/
//////////////////////////////////////
/*
function absoluteSum(arr) {
    return arr.reduce((sum, num) => sum + Math.abs(num), 0)
}
console.log(absoluteSum([1, 2, 3, 4, 5]))
*/
///////////////////////////////////////////////

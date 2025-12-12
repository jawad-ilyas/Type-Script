var number = 10;
// console.log(number)
// Cannot redeclare block-scoped variable 'number2'.ts(2451)
//  this error occur because type script treat all files as single file
var number2 = 20;
// we can also asign the number to total , but we no need to assign because they get refrence from the asign values
// also known as type refrence 
var total = number + number2;
// console.log(total)
// how to add number with string 
var data1 = 10;
var data2 = "20";
// how both are difference we have 3 ways to do that
// let data2Convert = Number(data2)
// let data2Convert =+data2
console.log(data1 + +data2);

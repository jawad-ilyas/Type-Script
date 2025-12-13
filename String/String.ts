/*

apply sting data type
way to defined string
covert into string data types
apply boolean data types
possible boolean vlaues
inference and declaration issues

*/

let age:number = 30;
let userName:string = "jawad ilyas"

// change any data type to string
// let info:string = `${age}`;
// let info:string = age.toString();
let info:string = "" + age;
console.log(typeof info)

// let boolData:Boolean = 0   xxxx
// let boolData:Boolean = 1 xxxx
let boolData:Boolean = true
console.log(boolData)
boolData = false
console.log(boolData)

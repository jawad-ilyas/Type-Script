

// primitive data types
/*
number,
string , boolean , undefined , null , symbol , big int
*/

// number 
let ages: number = 120
console.log(ages)

// string 

let names: string = "jawad"
console.log(names)

// boolean

let flags: boolean = true
console.log("boolean example", flags)

// undefined
// undefined means value are not defined yet , after this may be assign 
let undefinedVariable: undefined = undefined
console.log(undefinedVariable)

// null
let nullVariable: null = null
console.log(nullVariable)

// symbol
let id: symbol = Symbol(121212)
console.log("symbol examples ", id)


// big int 

let numberbigint: bigint = 1212121212121212983129812931293129312931298n
console.log("big int number ", numberbigint)



// object data types
//  tuples , array , object

// tuples means set of values 
// when you need to store multiple values of different data types

let employeeTuple: [string, number];
employeeTuple = ['jawad', 12]
console.log(employeeTuple[0])
console.log(employeeTuple[1])





let employeeTuple2: [string, number, boolean];
employeeTuple2 = ["jawad", 12, false]
console.log(employeeTuple2[0])
console.log(employeeTuple2[1])
console.log(employeeTuple2[2])


let optionalTuple: [string, number?]
optionalTuple = ['jawad']
optionalTuple = ['jawad', 12]


// arrays , collection of the data 

let arrayOfNumbers: number[];

arrayOfNumbers = [1, 2, 3]

console.log(arrayOfNumbers[0])
console.log(arrayOfNumbers[1])
console.log(arrayOfNumbers[2])


let arrayOfStrings: string[];
arrayOfStrings = ["jawad", "ilyas", "mughal"]
console.log(arrayOfStrings[0])
console.log(arrayOfStrings[1])
console.log(arrayOfStrings[2])



// object


let users: {
    name: string,
    age: number
} = {
    name: "jawad",
    age: 12
}

console.log(users?.name)
console.log(users?.age)




// special data types 
// void , never ,any , unkown 

// void means , nothing is retured 

function hellos(): void {
    console.log("jawad void exmaples ")
}
hellos()

// never means nothing is return able 
// function errroFun(): never {
//     console.log("this function is not able to return somehting ")
//     // return 2;
// }

// errroFun();

//  any data we store into this variable 

let anyTypeTesting: any = 12
console.log(anyTypeTesting)
anyTypeTesting = "jawad"
console.log(anyTypeTesting)


// unkown mean before use check the data types

let checkUnkownVariable: unknown = "testing unkown ";

// console.log(checkUnkownVariable.toUpperCase())

if (typeof checkUnkownVariable === "string") {
    console.log(checkUnkownVariable.toUpperCase())

}



// advance data types 
// enum , types , union , intersection , literals types

// enum 
enum city {
    lahore,
    karachi,
    islamabad

}

let userCity: city = city.lahore


// literals types

let directions: "up" | "down"

// directions = "forwar"
directions = 'down'


// union means combine tow or more data types

let unionExample: string | number = "jawad"
unionExample = 10


// intersection


type EmployeesType = { name: string }
type managers = { deperatement: string }
// type TeamLead = EmployeesType & Managers;
// let lead: TeamLead = { name: "jawad", depertement: 'itc' }




type Id = string | number
let userId: Id = "121212"
console.log(userId)



let sum: (x: number, y: number) => number

sum = (x, y) => {
    return x + y
}



// ===============================
//  TypeScript Data Types Interview Questions
// ===============================

// -------------------------------
// 1. Primitive Data Types
// -------------------------------

// Q1: What are the primitive data types in TypeScript?
// Q2: What is the difference between 'null' and 'undefined' in TypeScript?
// Q3: Can you assign a number to a variable of type 'string'?
// Q4: How is 'bigint' different from 'number'? When would you use it?
// Q5: What is 'symbol'? Why is it used in TypeScript?
// Q6: Can you assign a void function to a variable? Explain with example.
// Q7: What is the difference between 'any' and 'unknown' types?

// -------------------------------
// 2. Object Data Types
// -------------------------------

// Q8: What is a tuple in TypeScript? Give an example.
// Q9: What is the difference between an array and a tuple in TypeScript?
// Q10: How do you define an object type in TypeScript? Give an example.
// Q11: Can object properties be optional? How do you define optional properties?
// Q12: What is the difference between interface and type alias for objects?

// -------------------------------
// 3. Special Data Types
// -------------------------------

// Q13: What is the 'void' type used for in TypeScript?
// Q14: What is the 'never' type? Give a scenario where it is used.
// Q15: How is 'any' different from 'unknown'? Which is safer to use?
// Q16: Can you assign 'undefined' or 'null' to a variable of type 'void'?

// -------------------------------
// 4. Advanced Types
// -------------------------------

// Q17: What is an enum in TypeScript? Give an example.
// Q18: Can enum values be strings or numbers only?
// Q19: What is a literal type? Give an example of string literal type.
// Q20: What is a union type? Give an example combining string and number.
// Q21: What is an intersection type? Give an example combining two object types.
// Q22: How do you use type aliases to simplify complex types?
// Q23: Can you mix literal, union, and enum types in a single variable? Explain.

// -------------------------------
// 5. Function Related Types
// -------------------------------

// Q24: How do you define the type of a function in TypeScript?
// Q25: What is the difference between a function returning 'void' and 'never'?
// Q26: How do you type a function that takes multiple arguments of different types?

// -------------------------------
// 6. Bonus Conceptual Questions
// -------------------------------

// Q27: What happens if you try to assign a value of one type to a variable of another type?
// Q28: How does TypeScript enforce type safety at compile time?
// Q29: Why would you choose 'unknown' over 'any' in TypeScript?
// Q30: Can tuple elements be optional or readonly? Give an example.

console.log('dom practice')

// ! --- sign mean this variable present into website ,  
var headingElement = document.querySelector("h1")! 
var ancherElement = document.querySelector("a")
// type casing example
var headingElementStyle = document.querySelector(".headingStyle")
var ancherElementStyle = document.querySelector(".ancherStyle") as HTMLAnchorElement 
// if we not use ? then give error , if use then give undefined 
console.log(headingElement?.textContent)
console.log(ancherElement?.href)
console.log(headingElementStyle?.textContent)

// this property will give you error if you not type caset
console.log(ancherElementStyle?.href)
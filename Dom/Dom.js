console.log('dom practice');
// ! --- sign mean this variable present into website ,  
var headingElement = document.querySelector("h1");
var ancherElement = document.querySelector("a");
// type casing example
var headingElementStyle = document.querySelector(".headingStyle");
var ancherElementStyle = document.querySelector(".ancherStyle");
// if we not use ? then give error , if use then give undefined 
console.log(headingElement === null || headingElement === void 0 ? void 0 : headingElement.textContent);
console.log(ancherElement === null || ancherElement === void 0 ? void 0 : ancherElement.href);
console.log(headingElementStyle === null || headingElementStyle === void 0 ? void 0 : headingElementStyle.textContent);
// this property will give you error if you not type caset
console.log(ancherElementStyle === null || ancherElementStyle === void 0 ? void 0 : ancherElementStyle.href);

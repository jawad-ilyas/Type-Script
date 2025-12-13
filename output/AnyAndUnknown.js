"use strict";
//   #######################     any and unkown case
Object.defineProperty(exports, "__esModule", { value: true });
/*
Any date types use case

when you migrate your js project into typescript
when dealing with the dynamic value
when working with the third - party libraryie
*/
let values = "jawad";
values = 10;
values = ['jawad'];
values = [10, 20, 30];
values = true;
// value does not provide any error because we are use the any data type
console.log(values);
// the differenece between any and unknow , unknown if you want to use me then check the data type before
let values1 = "jawad";
//  # give error because before use check data type 
// console.log(values1.toUpperCase())
if (typeof values1 === "string") {
    console.log(values1.toUpperCase());
}
//# sourceMappingURL=AnyAndUnknown.js.map
// function updatedSum(target:any,key:string,descriptor:PropertyDescriptor){
//     descriptor.value=function sum(x:number,y:number){
//         let output=x+y
//         return "the output of "+x+" and "+y+ " is : " + output
//     }
// }

// class CustomMaths1{

//     @updatedSum
//     sum(x:number,y:number){
//         return x+y
//     }
// }
// var cm2= new CustomMaths1();
// console.log(cm2.sum(10,20));
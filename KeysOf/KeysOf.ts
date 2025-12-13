type PersonT={
  name:string,
  age:number,
  isEmp:boolean
}
let PersonData:PersonT={
  name:'Anil sidhu',
  age:30,
  isEmp:true
}
type PersonX=keyof PersonT;

let PersonDataX:keyof PersonT;;
PersonDataX="name";
PersonDataX="age";
PersonDataX="isEmp";

let UserX:keyof typeof PersonData="name"
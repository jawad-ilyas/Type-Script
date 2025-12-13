// type userData7Type={
//     [key:string]:number|string
// }

// var userData7:userData7Type={
//     mobile:9999,
//     id:10,
//     marks:90,
//     age:40,
//     semester:3,
//     name:'anil'
// }

type userData7Type = {
    name:string,
    id:number,
    mobile:number,
    readonly [key: string]: number | string
}

var userData7: userData7Type = {
    name: 'anil',
    mobile: 9999,
    id: 10,
    marks:90,
    age:40,
    semester:3,
}
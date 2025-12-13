// similer to interface , 
//  but we can use Union with type but not with intersection 


// interface expample 
interface a11  {name : string}
interface b11 {age : number}


type  c11 =  a11 | b11


type a1 = {name : string}
type b1 = {age : number}


type c = a1 | b1 

let usersObjects1 : c | c11 = {
    name : "jawad" , 
    age : 20


}
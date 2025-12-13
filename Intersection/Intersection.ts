type peronsTA = {name : string}
type peronsTB = {age : number}
type personTc = peronsTA & peronsTB
// problem we need to write again and again 
var personDataA : peronsTA = {name : 'jawad mughal'}
var personDataB : peronsTB = {age : 23}


var personDataC : personTc = {
    name : "jawad" ,
    age : 23
}


// union 
//  union allow to select one 


//  inter section 
//  allow combine two types  
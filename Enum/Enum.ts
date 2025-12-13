enum whoType {
    student = "student" , 
    teacher = "teacher" , 
    management = "management" , 
    labStaff = "labStaff"
}


var who:whoType = whoType.teacher

// who = "jawad" // giving error because we not select the value from teh enum case 

// if in enum we not asign return the index values


enum Roles {
    admin , 
    developer , manager

}

console.log(Roles)
console.log(Roles?.admin)
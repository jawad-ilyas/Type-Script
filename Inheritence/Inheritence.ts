// class Student {
//     constructor(){

//     }
//     login (name : string , password : string)
//     {
//         if(name && password)
//         {
//             return "student login "
//         }
//         else {
//             return "student not login or any error "
//         }
//     }
//     result ( marks : number) {
//         if(marks > 33)
//         {
//             return "Pass"
//         }
//         else {
//             return "failed"
//         }
//     }
// }
// class Teacher {
//     constructor(){

//     }
//     login (name : string , password : string)
//     {
//         if(name && password)
//         {
//             return "student login "
//         }
//         else {
//             return "student not login or any error "
//         }
//     }
//     subject ( subName : string) : string {
//         if(subName )
//         {
//             return "subName"
//         }
//         else {
//             return "pass the subject"
//         }
//     }
// }


// let student = new Student()
// let teacher = new Teacher()

// // but issue is this both class using the string , but now we can use inheritance and extens them 
// student.login("jawad" ,"1212")
// teacher.login("t1" ,"1212")


class Auth {
    login (name : string , password : string)
    {
        if(name && password)
        {
            return `${name } is this`
        }
        else {
            return "student not login or any error "
        }
    }
}


class Student extends Auth {
    constructor(){
        super()
    }

    result ( marks : number) {
        if(marks > 33)
        {
            return "Pass"
        }
        else {
            return "failed"
        }
    }
}
class Teacher extends Auth {
    constructor(){
        super()
    }

    subject ( subName : string) : string {
        if(subName )
        {
            return "subName"
        }
        else {
            return "pass the subject"
        }
    }
}

let student = new Student()
let teacher = new Teacher()

// /now both using the login method but extens from the other class

console.log(student.login("jawad" ,"1212"))


console.log(teacher.login("t1" ,"1212"))
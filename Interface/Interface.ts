
interface userInfo {
    name: string,
    age: number,
    company: string
}
interface teacherInfo extends userInfo {
    subject: string,
   
}


// instead of the writing again and again , we can use again and again by interface 
let userObject: userInfo = {
    name: 'jawad',
    age: 20,
    company: 'expotech'
}

// but now for teacher we need to use the subject key 
let teacherObject: teacherInfo = {
    name: 'jawad',
    age: 20,
    company: 'expotech',
    subject : 'typescript'
}
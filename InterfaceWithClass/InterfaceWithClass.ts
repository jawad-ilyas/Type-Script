interface CollageDataInterface {
    name :string , 
    dispayTeacherName() : void;
    getStudentName() : string[] ;

}


class CollageData implements CollageDataInterface{
   name : string
    constructor(name: string) {
        this.name = name
    }
    dispayTeacherName() : void {
        console.log("jawad" , "ilyas")
    }
    getStudentName():string[] {
        return ["jawad" , "ilyas + | " , "mughal"]
    }
}

var collage1 = new CollageData("ucp")

collage1.dispayTeacherName();
console.log(collage1.getStudentName())
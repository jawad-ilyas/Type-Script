class Company {
    static companyName:string = "Expo Tech Solution "


    getName ():string {
        // return this.companyName  xx wrong
        // return companyName  xx wrong
        return Company.companyName  // correct 
    }
}

const company = new Company()
console.log(company.getName())
// console.log(company.companyName)  // give error there because they are not object related more because of the stick keyword 
console.log(Company.companyName)
var Company = /** @class */ (function () {
    function Company() {
    }
    Company.prototype.getName = function () {
        // return this.companyName  xx wrong
        // return companyName  xx wrong
        return Company.companyName; // correct 
    };
    Company.companyName = "Expo Tech Solution ";
    return Company;
}());
var company = new Company();
console.log(company.getName());
// console.log(company.companyName)  // give error there because they are not object related more because of the stick keyword 
console.log(Company.companyName);

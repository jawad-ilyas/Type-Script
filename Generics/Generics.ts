function fruits<T>(data:T):T {

    return data
}


// the anwer for not using the any variable is this , because when we return check data type return proper data type other wise any return any ,if data type is string , bool , num
var fruitsOne = fruits("apple")
var fruitsNum = fruits(1000)
var fruitsBool = fruits(true)
console.log(fruitsOne)
console.log(fruitsNum)
console.log(fruitsBool)
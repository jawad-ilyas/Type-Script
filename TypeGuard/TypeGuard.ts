let userData : string | number | boolean = 20

userData = "jawad"


if(userData === "string")
    console.log("data is string")
else if(userData === "boolean")
    console.log("data is bookean")
else 
    console.log("no data ")



// use of the instance of

class Product21 {

}

class Order21 {

}

var product21 = new Product21()
var order21 = new Order21()


function checkInstance (data: Product21 | Order21)
{
    if(data instanceof  Product21)
    {
        console.log("instance of the product ")
    }
    else 
        console.log("instance of the order")
}


// checkInstance(order21)
// checkInstance(product21)



// check inface type using custom 


interface userData2 {
    name : string , 
    city : string,
}

interface userInfo2 {
    id : string , 
    email : string,
}

var userData21 : userData2 | userInfo2
var userData22 : userData2 | userInfo2

userData21 = {
    name : "jawad" ,
    city : "lahore" 
}

userData22 = {
    id : "jawad" ,
    email : "lahore" 
}

function checkInterfaceDataType (data: userData2 | userInfo2)
{
    if((data as userData2).name != undefined)
    {
        console.log("userData2")
    }
    if((data as userInfo2).id != undefined)
    {
        console.log("userInfo2")
    }
}

checkInterfaceDataType(userData22)
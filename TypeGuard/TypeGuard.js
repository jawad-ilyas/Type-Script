var userData = 20;
userData = "jawad";
if (userData === "string")
    console.log("data is string");
else if (userData === "boolean")
    console.log("data is bookean");
else
    console.log("no data ");
// use of the instance of
var Product21 = /** @class */ (function () {
    function Product21() {
    }
    return Product21;
}());
var Order21 = /** @class */ (function () {
    function Order21() {
    }
    return Order21;
}());
var product21 = new Product21();
var order21 = new Order21();
function checkInstance(data) {
    if (data instanceof Product21) {
        console.log("instance of the product ");
    }
    else
        console.log("instance of the order");
}
var userData21;
var userData22;
userData21 = {
    name: "jawad",
    city: "lahore"
};
userData22 = {
    id: "jawad",
    email: "lahore"
};
function checkInterfaceDataType(data) {
    if (data.name != undefined) {
        console.log("userData2");
    }
    if (data.id != undefined) {
        console.log("userInfo2");
    }
}
checkInterfaceDataType(userData22);

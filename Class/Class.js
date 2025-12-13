var Product = /** @class */ (function () {
    function Product(name, price, pid) {
        this.name = name;
        this.price = price;
        this.pid = pid;
    }
    Product.prototype.addToCart = function () {
        this.inCart = true;
        console.log("add to cart done");
    };
    Product.prototype.getItems = function () {
        if (this.inCart) {
            return " you cart item name is[".concat(this.name, "] and prduct id is this [ ").concat(this.pid, " ]");
        }
        else {
            return 'plese add item into cart';
        }
    };
    return Product;
}());
var product = new Product("i phone", "1200", 121212);
product.addToCart();
console.log(product.getItems());

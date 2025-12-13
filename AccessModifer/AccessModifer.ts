

class Product {
    name: string;
    price: string;
    pid: number;
    inCart: boolean;
    constructor(name: string, price: string, pid: number) {
        this.name = name;
        this.price = price;
        this.pid = pid
    }
    addToCart(): void {
        this.inCart = true
        console.log("add to cart done")
    }
    getItems() :string {
        if(this.inCart)
        {
            return ` you cart item name is[${this.name}] and prduct id is this [ ${this.pid} ]`
        }
        else {
            return 'plese add item into cart'
        }
    }
}

let product = new Product("i phone" , "1200" , 121212)
product.addToCart();
console.log(product.getItems())
interface IProduct {
    id:number;
    name:string;
    description?:string;         // optional
    price:number  // declartion only in interface.
    display():void   // void mins no return value
}

var objProduct : IProduct = {
    id : 123,
    name: "IPhone",
    price: 60000, // I have given implementation for IProduct interface
    display():void {
        console.log(this.id+ ' '+ this.name+' '+this.price);
        
    }
    
}

objProduct.display();


var objProducts : IProduct = {
    id : 567,
    name: "Vivo",
    description: "It's awesome",
    price: 50000, // I have given implementation for IProduct interface
    display():void {
        console.log(`${this.id}, ${this.name},${this.description}`);
    }

}
objProducts.display();
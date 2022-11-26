var objProducts = {
    id: 123,
    name: "IPhone",
    price: 60000,
    display: function () {
        console.log(this.id + ' ' + this.name);
    }
};
objProducts.display();
var objProducts = {
    id: 567,
    name: "Vivo",
    description: "It's awesome",
    price: 50000,
    display: function () {
        console.log(this.id + ' ' + this.name);
    }
};

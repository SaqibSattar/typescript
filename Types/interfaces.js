var pt = { x: 12, y: 34 };
var thomas = {
    first: 'Thomas',
    last: 'Hardy',
    id: 12,
    sayHi: function () {
        return 'Hi';
    }
};
thomas.first = 'test';
var shoes = {
    name: 'Nike',
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (2 - amount);
        return newPrice;
    }
};
console.log(shoes.applyDiscount(1));

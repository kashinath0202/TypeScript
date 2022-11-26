var myCar = {
    make: "TATA",
    model: "ALtroz",
    year: 2022,
    color: "Gray",
    numOfDoors: 4,
    seats: 4,
    auto: false
};
for (var key in myCar) {
    if (Object.prototype.hasOwnProperty.call(myCar, key)) {
        var element = myCar[key];
        console.log("".concat(key, " ,").concat(element));
    }
}

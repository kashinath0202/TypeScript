var mobile = {
    company: "VIVO",
    model: "vivo V25 5G",
    price: 51000,
    ram: "12GB",
    storage: "256 GB",
    displayType: "Full HD",
    battery: "4500 mAh Lithium Battery",
    processor: "Mediatek Dimensity 900 Processor",
    simType: "Dual Sim",
    displaySize: "16.36cm",
    frontCamera: "50MP",
    backCamera: "64MP + 8MP + 2MP",
    color: "Surfing Blue"
};
console.log(mobile);
for (var key in mobile) {
    if (Object.prototype.hasOwnProperty.call(mobile, key)) {
        var element = mobile[key];
        console.log("".concat(key, "   ->   ").concat(element));
    }
}

interface IExterior {
    color: string;
    numOfDoors: number
} 

interface IInterior {
    seats: number;
    auto: boolean;
}

interface ICar extends IExterior, IInterior {
    make: string;
    model: string;
    year: number;
}

var myCar: ICar = {
    make: "TATA",
    model: "ALtroz",
    year: 2022,
    color: "Gray",
    numOfDoors: 4,
    seats: 4,
    auto: false
}

for (const key in myCar) {
    if (Object.prototype.hasOwnProperty.call(myCar, key)) {
        const element = myCar[key];
        console.log(`${key} ,${element}`);
        
    }
}
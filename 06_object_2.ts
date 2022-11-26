
console.warn("=============== Object ===============");

let employee:any = {
    firstName:"Rohit",
    lastName:"Sharma",
    gender:"Male",
    mobileNumber: +9199999999,
    city:"Mumbai",
    state:"Maharashtra",
    country:"India"
    
};

console.warn("=========== Traversing In Object ===========");

for (const key in employee) {
    if (Object.prototype.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(`Keys -  ${key}, Values  -  ${element}`);
      
       
    }
}

console.warn("=============== Object Destructure ===============");

let {firstName,lastName,gender,mobileNumber,city,state,country} =employee

console.log(`First Name    - ${firstName}`);
console.log(`Last Name     - ${lastName}`);
console.log(`Gender        - ${gender}`);
console.log(`Mobile Number - ${mobileNumber}`);
console.log(`City          - ${city}`);
console.log(`State         - ${state}`);
console.log(`Country       - ${country}`);


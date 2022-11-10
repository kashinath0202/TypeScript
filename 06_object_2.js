console.warn("=============== Object ===============");
var employee = {
    firstName: "Rohit",
    lastName: "Sharma",
    gender: "Male",
    mobileNumber: +9199999999,
    city: "Mumbai",
    state: "Maharashtra",
    country: "India"
};
console.warn("=========== Traversing In Object ===========");
for (var key in employee) {
    if (Object.prototype.hasOwnProperty.call(employee, key)) {
        var element = employee[key];
        console.log("Keys -  ".concat(key, ", Values  -  ").concat(element));
    }
}
console.warn("=============== Object Destructure ===============");
var firstName = employee.firstName, lastName = employee.lastName, gender = employee.gender, mobileNumber = employee.mobileNumber, city = employee.city, state = employee.state, country = employee.country;
console.log("First Name    - ".concat(firstName));
console.log("Last Name     - ".concat(lastName));
console.log("Gender        - ".concat(gender));
console.log("Mobile Number - ".concat(mobileNumber));
console.log("City          - ".concat(city));
console.log("State         - ".concat(state));
console.log("Country       - ".concat(country));

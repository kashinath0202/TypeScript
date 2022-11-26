class Calculator{
static number_1:number;
static number_2:number;

   constructor(number_1:number,number_2:number){
            this.number_1 = number_1,
            this.number_2 = number_2
    }
}
var addition = new Calculator(50,100);
var subtraction = new Calculator(50,100);
var multiplication = new Calculator(50,100);
var division = new Calculator(50,100);

console.log(addition);


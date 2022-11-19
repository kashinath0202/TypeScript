// Grade calculator 
// prompt use for getting value.
// math, physics , chem numeric type 
// calculate average of these three subject 
// divide result by three . 
// once you have average 
// you can use if else lader for grade .
// if avrage < 70 then C grade 
// if avarage  > 70 < 90 B grade 
// if avarage  > 90 A grade


// var gardeCalculator = (math:any,physics:any,chemistry:any):any => {
    
//     console.log(`Math Marks      = ${math}`);
//     console.log(`Physics Marks   = ${physics}`);
//     console.log(`Chemistry Marks = ${chemistry}`);
    
//     var total = math + physics + chemistry;
//     console.log(`Total Marks     = ${total}`);
//     var avarage = total / 3 ;
//     console.log(`Avarage         = ${avarage}%`);

//     if (avarage<=70) {

//          console.log("Grade - C");

//     }else if (avarage<=90) {

//         console.log("Grade - B");

//     } else if(avarage>=90) {
         
//         console.log(console.log("Grade - A"));
        
//     }
   
// }
// gardeCalculator(prompt("Enter Your Math Subject Marks"),prompt("Enter Your Physics Subject Marks"),prompt("Enter Your Chemistry Subject Marks"));

var num = Number (prompt("Enter Your Seat Number"));
console.log(`Seat Number      :- ${num}`);


switch  (num) {

        case 1111:
        console.log("Student Name :- Rohit Shrama");
        break;

        case 2222:
        console.log("Student Name :- Virat Kohali");
        break;

        case 3333:
        console.log("Student Name :- MS Dhoni");
        break;

        case 4444:
        console.log("Student Name :- Shikhar Dhavan");
        break;

        case 5555:
        console.log("Student Name :- Suresh Raina");
        break;

    default:
        console.log("Invalid Enter");
        
        break;
}




var math = Number (prompt("Enter Your Math Subject Marks"));
console.log(`Math Marks      = ${math}`);

var physics = Number (prompt("Enter Your Physics Subject Marks"));
console.log(`Physics Marks   = ${physics}`);

var chemistry = Number (prompt("Enter Your Chemistry Subject Marks"));
console.log(`Chemistry Marks = ${chemistry}`);


var total = math + physics + chemistry;
    console.log(`Total Marks     = ${total}`);
    var avarage = total / 3 ;
    console.log(`Avarage         = ${avarage}%`);

    if (avarage<35) {
        
        console.log("Sorry, Your Result Fail");
        

    } else if(avarage<=70) {

        console.log("Congratulations! Your Result Pass ");
         console.log("Grade - C");
         

    }else if (avarage>=70 && avarage <=90 ) {

        console.log("Congratulations! Your Result Pass ");
        console.log("Grade - B");

    } else {
         console.log("Congratulations! Your Result Pass ");
         
        console.log(console.log("Grade - A"));
        
    }
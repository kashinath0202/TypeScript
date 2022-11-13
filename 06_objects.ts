var emp = {
    name: "Dnyanesh",
    score: 250
}


for(var e in emp)
{
   console.log(e);
   console.log(emp[e]);
}


var courses: any = ["ANgular", "ReactJs", ".Net"];

courses.push("java");
courses.push(10);

for(var i = 0; i < courses.length; i++)
{
    console.log(courses[i]);
}


var std: any ={
    firstName: "sachin",
    lastName: "Patil"
}

var {firstName,lastName, course="hii"} = std



var stdd = {
    firstName: "Jack",
    lastName: "Sparrow"
}

var {firstName: userFirstnames, lastName: userLastNames} = stdd;

console.log(userFirstnames);
console.log(userLastNames);


console.warn("====================================================");


function display1(id:number, name:string, role?:string) 
{
    console.log("Id", id);
    console.log("Name", name);
    if(role!= undefined)
    {
        console.log("Role", role);
    }
    
}

display1(1, "Dnyanesh", "Admin");
display1(1, "Dnyanesh");


console.warn("====================================================");

function display(id:number, name:string, role:string = "gest User") 
{
    console.log("Id", id);
    console.log("Name", name);
    
}

display(1, "Dnyanesh", "Admin");
display(1, "Dnyanesh");

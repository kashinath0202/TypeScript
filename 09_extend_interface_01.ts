interface IInternal {
  ram:any;
  storage:any
  displayType:string;
  battery:any;
  processor:any;
  simType:string
} 

interface IExternal{
    displaySize:any;
    frontCamera:any;
    backCamera:any;
    color:string;
}

interface IMobile extends IInternal,IExternal{
    company:string;
    model:any;
    price:number
}

var mobile:IMobile={
    company:"VIVO",
    model:"vivo V25 5G",
    price:51000,
    ram:"12GB",
    storage:"256 GB",
    displayType:"Full HD",
    battery:"4500 mAh Lithium Battery",
    processor:"Mediatek Dimensity 900 Processor",
    simType:"Dual Sim",
    displaySize:"16.36cm",
    frontCamera:"50MP",
    backCamera:"64MP + 8MP + 2MP",
    color:"Surfing Blue"

}

console.log(mobile);

// OR

for (const key in mobile) {
    if (Object.prototype.hasOwnProperty.call(mobile, key)) {
        const element = mobile[key];
        console.log(`${key}   ->   ${element}`);
        
    }
}
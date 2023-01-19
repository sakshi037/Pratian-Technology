//Write your typescript code here

let message:string = "Welcome to QuickFood Restaurant"

//print the message in console
console.log(message);

let customerID: number= 111
let customerName: string="Sakshi"

console.log("Customer ID:"+customerID);
console.log("Customer Name:"+customerName);

//Lab7
function totalPrice(n1:number,n2:number,showRes:boolean,str:string){
    const result=n1+n2;
    if(showRes)
    {
        console.log(`${str} Rs ${result}`);
    }
    else
    {
        return n1+n2;
    }
}

const itemPrice= 12;
const deliveryCharge= 12.4;
const showRes= true;
const cusString="Chocolate prince is : ";
totalPrice(itemPrice,deliveryCharge,showRes,cusString);
//console.log(`Addition:` +result);

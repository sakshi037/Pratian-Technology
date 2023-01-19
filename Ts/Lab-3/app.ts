//Write your typescript code here

let message:string = "Welcome to QuickFood Restaurant"

//print the message in console
console.log(message);

let customerID: number= 111
let customerName: string="Sakshi"

console.log("Customer ID:"+customerID);
console.log("Customer Name:"+customerName);

//Lab3
function totalPrice(n1:number,n2:number){
    return n1+n2;
}

const itemPrice= 12;
const deliveryCharge= 12.4;
const result= totalPrice(itemPrice,deliveryCharge);
console.log(`Addition: ${result}`);

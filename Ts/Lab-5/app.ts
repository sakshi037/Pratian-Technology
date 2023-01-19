//Write your typescript code here

let message:string = "Welcome to QuickFood Restaurant"

//print the message in console
console.log(message);

let customerID: number= 111
let customerName: string="Sakshi"

console.log("Customer ID:"+customerID);
console.log("Customer Name:"+customerName);

//Lab5
function totalPrice(n1:number,n2:number,showRes:boolean){
    if(showRes)
    {
        console.log(n1+n2);
    }
    else
    {
        return n1+n2;
    }
}

const itemPrice= 12;
const deliveryCharge= 12.4;
const showRes= false;
const result= totalPrice(itemPrice,deliveryCharge,showRes);
console.log(`Addition:` +result);

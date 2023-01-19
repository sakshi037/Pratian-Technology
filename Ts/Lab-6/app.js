//Write your typescript code here
var message = "Welcome to QuickFood Restaurant";
//print the message in console
console.log(message);
var customerID = 111;
var customerName = "Sakshi";
console.log("Customer ID:" + customerID);
console.log("Customer Name:" + customerName);
//Lab6
function totalPrice(n1, n2, showRes, str) {
    if (showRes) {
        console.log(str + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var itemPrice = 12;
var deliveryCharge = 12.4;
var showRes = true;
var cusString = "Chocolate prince is : ";
totalPrice(itemPrice, deliveryCharge, showRes, cusString);
//console.log(`Addition:` +result);

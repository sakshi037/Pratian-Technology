//Write your typescript code here
var message = "Welcome to QuickFood Restaurant";
//print the message in console
console.log(message);
var customerID = 111;
var customerName = "Sakshi";
console.log("Customer ID:" + customerID);
console.log("Customer Name:" + customerName);
//Lab5
function totalPrice(n1, n2, showRes) {
    if (showRes) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var itemPrice = 12;
var deliveryCharge = 12.4;
var showRes = false;
var result = totalPrice(itemPrice, deliveryCharge, showRes);
console.log("Addition:" + result);

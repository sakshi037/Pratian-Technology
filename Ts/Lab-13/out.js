//Create a namespace PriceCalculator
//add a function OrderPrice(orderAmount, discount) to return the discounted order price
var PriceCalci;
(function (PriceCalci) {
    function OrderPrice(orderAmount, discount) {
        return orderAmount - discount;
    }
    PriceCalci.OrderPrice = OrderPrice;
})(PriceCalci || (PriceCalci = {}));
//Import the namespace
/// <reference path = "./PriceCalc.ts" />
//get the total price from the PriceCalculator namespace
let totalOrderPrice = PriceCalci.OrderPrice(500, 150);
//execute to display the output
console.log('Total price of the order is: ' + totalOrderPrice);

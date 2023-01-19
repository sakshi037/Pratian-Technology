//Create a namespace PriceCalculator
//add a function OrderPrice(orderAmount, discount) to return the discounted order price
var PriceCalci;
(function (PriceCalci) {
    function OrderPrice(orderAmount, discount) {
        return orderAmount - discount;
    }
    PriceCalci.OrderPrice = OrderPrice;
})(PriceCalci || (PriceCalci = {}));

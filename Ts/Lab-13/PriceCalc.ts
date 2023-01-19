    //Create a namespace PriceCalculator
	
	//add a function OrderPrice(orderAmount, discount) to return the discounted order price
namespace PriceCalci{
    export function OrderPrice(orderAmount: number,discount: number){
        return orderAmount-discount;
    }
}
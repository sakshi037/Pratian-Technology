    //6. [Function Closure] Use closure property to increase or decrease the amount of Tip.

//Step-1: Use function closure property to hide the function of 
//inrement and decrement and display the new value of tip amount. 

var tipAmount = document.getElementById('tipAmount');

var add = (function () {
    //Write code here
    var counter = parseInt(tipAmount.textContent);

    return function(){
        counter += 10;
        return counter;

    }
})();
  
function addTip(){
    tipAmount.innerHTML = add();
}

//Create subtract() closure function to decrement the tip amount
//Write code here
var subtract = (function() {
var subcounter = parseInt(tipAmount.textContent);

return function(){
    subcounter -= 10;
    return subcounter;
}
})();
  
function subtractTip(){
    tipAmount.innerHTML = subtract();
}
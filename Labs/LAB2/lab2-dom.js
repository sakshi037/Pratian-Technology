//2. [DOM] For all added items if it is veg then put the text color as green otherwise red

//Step1: Get all the Added items using 'getElementsByClassName'. 
//Note class name of the li items is 'list-group-item'
//var items = write your code here

//Step2: Itearate through each item and check if it contains "Veg". 
//If not contains "Veg" set the text color as "green" otherwise set it as "red"

var items= document.getElementsByClassName("list-group-item");

for(var i=0; i<items.length; i++){
    if(items[i].textContent.includes("Veg")){
        items[i].style.color=" green";
    }
    else{
        //set colour to red
        items[i].style.color="red";
    }
}
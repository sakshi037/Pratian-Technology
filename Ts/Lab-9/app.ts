//Write your typescript code here

//Lab9
const foodItem=['Sandwich','Momos','Pizza'];


function sayHello()
{
    console.log('Working');
}
// foodItem.forEach(sayHello);
foodItem.forEach(function(item, index){
    console.log(`${index+1} - ${item}`);
});
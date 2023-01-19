//Write your typescript code here
//Lab9
var foodItem = ['Sandwich', 'Momos', 'Pizza'];
function sayHello() {
    console.log('Working');
}
// foodItem.forEach(sayHello);
foodItem.forEach(function (item, index) {
    console.log("".concat(index + 1, " - ").concat(item));
});

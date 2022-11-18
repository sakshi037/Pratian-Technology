
//1. Company was born
let company = new Company("Shoopperstop", true, new Date(2022,11,11));

//2. company decided to sel items 
let itemShirt = new Item(1,2000.00, "Louis Phillipe");
let itemPant = new Item(1,3000.00, "Allen Solly");
let itemShoe = new Item(1,5000.00, "Nike");



company.items.push(itemShirt);
company.items.push(itemPant);
company.items.push(itemShoe);

 //3.CUstomer walked into purchase items 
    let regularCustomer = new Customer("Sakshi","REGULAR");

 //4. Customer moved around to purchase items 
 
     let regularOrder =new order();
     regularOrder.OrderDate = new Date(2022,11,11);
//here items in the order is a map . which is a key value pair

    regularOrder.items.set(itemShirt,3);
    regularOrder.items.set(itemPant,2);

//5.Then customer is handed over the items and bill
    

    regularCustomer.orders.push(regularOrder);

//  //6.The customer decides to leave the company along with the order 
//  //company has many customers
    company.customers.push(regularCustomer);

//  //...Qyeries to check if the adove is working
 regularOrder.getOrderTotal();

 for(let i=0; i<company.items.length;i++){
    console.log(company.items[i].description);
    console.log(company.items[i].rate);
 }


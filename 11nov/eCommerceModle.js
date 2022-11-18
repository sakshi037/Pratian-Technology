//Items that are sold by the company.width default  parameters
var Item = function(id,rate,description){
    this.id= id;
    this.rate = rate;
    this.description = description;
};

//Order Model
let order = function(){
    
    this.orderDate = null;
    // Order has  many items
    this.items= new Map();
     this.getOrderTotal = function(){
        //Logic to calculate the order total
         let orderTotal = 0;

        //we should take rate of the item and multiply witj quantity
            
        return orderTotal;
    }
};
//Customer Model with default parameters
let Customer = function(name,custType){
    this.name = name;
    this.custType = custType;
    this.orders = new Array();
    this.getOrderTotal=function(){
        //Write logic to get order total for customer  
     }
    
};
//Company Model with default parameters
let Company = function(name, isActive, incorporationDate){
    this.name = name;
    this.isActive = isActive;
    this.incorporationDate = incorporationDate;
    this.items = new Array();
    this.customers = new Array();
};



//Order Model
let Order = function(){
    this.OrderDate = null;

};


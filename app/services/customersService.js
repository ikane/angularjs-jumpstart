'use strict';
(function() {
    
    var CustomersService = function() {
        
        var customers = [ {
                     id:1, 
                     name:'Ibou', 
                     city:'Kremlin', 
                     orderTotal:15.789, 
                     joined:'2000-12-02',
                     orders:[
                        {"productName": "Baseball", "itemCost": 9.99},
                        {"productName": "Bat", "itemCost": 19.99}
                     ]
                    },
                  {
                      id:2, 
                      name:'Jean', 
                      city:'Paris', 
                      orderTotal:15.1789, 
                      joined:'2009-12-02',
                      orders:[
                          {"productName": "Basketball", "itemCost": 7.99},
                          {"productName": "Shoes", "itemCost": 199.99}
                      ]
                  },
                   {
                       id:3, 
                       name:'Modou', 
                       city:'Lille', 
                       orderTotal:25.4789, 
                       joined:'2010-11-02',
                      orders:[
                          {"productName": "Frisbee", "itemCost": 2.99},
                {"productName": "Hat", "itemCost": 5.99}
                      ]
                   },
                   {
                       id:4, 
                       name:'Eric', 
                       city:'Caen', 
                       orderTotal:315.471, 
                       joined:'2014-05-02',
                      orders:[
                          {"productName": "Boomerang", "itemCost": 29.99},
                        {"productName": "Helmet", "itemCost": 19.99},
                        {"productName": "Kangaroo Saddle", "itemCost": 179.99}
                      ]
                   }
        ];
        
        this.getCustomers = function() {
            return customers;
        }
        
        this.getCustomer = function(customerId) {
             for(var i=0; i<customers.length; i++) {
                var cust = customers[i];
                if(cust.id === parseInt(customerId)) {
                    return cust;
                }
            }
            return null;
        }              
    };
    
    angular.module('customersApp').service('customersService', CustomersService);
}());
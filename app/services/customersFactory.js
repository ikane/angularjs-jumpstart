(function() {
    "use strict";
    
    var CustomersFactory = function($http) {
        
        var factory={};
        
        factory.getCustomers = function() {
            return $http.get('/customers');
        }
        
        factory.getCustomer = function(customerId) {
             return $http.get('/customers/' + customerId);
        }
        
        factory.getAllOrders = function() {
            return $http.get('/allOrders');
        }
        
        return factory;
    };
    
    CustomersFactory.$inject = ['$http'];
    
    angular.module('customersApp').factory('CustomersFactory', CustomersFactory);
}());
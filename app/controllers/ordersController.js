/**
* Wrapper function to make sure nothing is in the global scope
*/
(function(){
    var OrdersController = function($scope, $routeParams, CustomersFactory) {
        
        var customerId = $routeParams.customerId;       
        $scope.currentCustomer = null;
                
        function init() {
             //$scope.currentCustomer=CustomersFactory.getCustomer(customerId);
            CustomersFactory.getCustomer(customerId)
                .success(function(customer){
                    $scope.currentCustomer = customer;
                })
                .error(function(data, status){/* handle error*/})
            ;
        }
        
        init();
    }

    angular.module('customersApp').controller('OrdersController', OrdersController);

}());
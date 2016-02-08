/**
* Wrapper function to make sure nothing is in the global scope
*/
(function(){
    var AllOrdersController = function($scope, $routeParams, CustomersFactory) {
        
        
        $scope.allOrders = [];
                
        function init() {
             //$scope.currentCustomer=CustomersFactory.getCustomer(customerId);
            CustomersFactory.getAllOrders()
                .success(function(data){
                    $scope.allOrders = data;
                })
                .error(function(data, status){
                    console.log(data);
                    /* handle error*/
                })
            ;
        }
        
        init();
    }

    angular.module('customersApp').controller('AllOrdersController', AllOrdersController);

}());
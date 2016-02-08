(function(){
    var CustomersController = function($scope, CustomersFactory) {
        //$scope.customers = CustomersFactory.getCustomers();
        
        CustomersFactory.getCustomers()
            .success(function(customers) {
                $scope.customers = customers;
            })
            .error(function(data, status, headers, config){
            //handle errors here
        })
        ;
    }

    angular.module('customersApp').controller('CustomersController', CustomersController);

}());
angular.module('angularJSBeeZen').controller('navCrt', function ($scope, OffreService) {

    $scope.$watch(function () {
            return OffreService.nombreProduit();
        },
        function(newVal) {
            console.log(newVal);
            $scope.panier = newVal;

        }, true);


});

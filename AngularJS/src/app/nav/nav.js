angular.module('angularJSBeeZen').controller('navCrt', function ($scope, OffreService,$location) {

    $scope.$watch(function () {
            return OffreService.nombreProduit();
        },
        function(newVal) {
            $scope.panier = newVal;

        }, true);



    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

});

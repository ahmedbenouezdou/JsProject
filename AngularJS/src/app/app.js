var app=angular.module("angularJS1toAngular2BeeZen",['ngRoute','bookModule','ngCookies','panierModule','loginModule']);


app.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/book/book.html',
            controller: 'bookCrt'
        }). when('/panier', {
            templateUrl : 'app/panier/panier.html',
            controller:'panierCtrl'
        }). when('/inscription', {
            templateUrl : 'app/inscription/inscription.html',
            controller:'inscriptionCtrl'
        }). when('/login', {
            template:'<login></login>'
        }).otherwise({
            redirectTo: '/'
        });
});

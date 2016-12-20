var app=angular.module("angularJSBeeZen",['ui.router','bookModule','ngCookies','panierModule','loginModule']);



app.config(function($stateProvider,$urlRouterProvider) {

    var states = [
        { name: 'home', url: '/', controller: 'bookCrt',templateUrl: 'app/book/book.html' },
        { name: 'panier', url: '/panier', templateUrl : 'app/panier/panier.html', controller: 'panierCtrl' },

        {
            name: 'login',
            url: '/login',
            templateUrl: 'app/login/login.html',
            component: 'login',
            resolve: {}
        }
    ];

    // Loop over the state definitions and register them
    states.forEach(function(state) {
        $stateProvider.state(state);
        $urlRouterProvider.otherwise('/');

    });


});


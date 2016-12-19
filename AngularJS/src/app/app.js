var app=angular.module("angularJSBeeZen",['ui.router','bookModule','ngCookies','panierModule','loginModule']);



app.config(function($stateProvider) {

    var states = [
        { name: 'home', url: '/home', controller: 'bookCrt',templateUrl: 'app/book/book.html' },
        { name: 'panier', url: '/panier', templateUrl : 'app/panier/panier.html', controller: 'panierCtrl' },

        {
            name: 'login',
            url: '/login',
            component: 'login',
            resolve: {}
        }
    ];

    // Loop over the state definitions and register them
    states.forEach(function(state) {
        $stateProvider.state(state);
    });
});


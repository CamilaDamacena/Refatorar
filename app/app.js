var escolaApp = angular.module("EscolaApp", ["ui.router"]);
        
//Controllers e Factorys        
var baseUrl = "http://mobile-aceite.tcu.gov.br:80/nossaEscolaRS";

console.log("Executou!!")

//Configuração das rotas.----------------------------------------------------------------------------//
escolaApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    var homeState = { //Para cada página terá um conjunto desses, faz o mapeamento aqui;
        url: '/home',
        templateUrl: 'home.html'
    };

    $stateProvider.state('home', homeState);
});
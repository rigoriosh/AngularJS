(function () {
    'use strict';

    var app = angular.module('MyFirstApp', []);
    app.run(function ($rootScope) { // en esta seccion todas las variables q se creen se compartiran o veran reflejadas en todos los controladores
        $rootScope.nombre = "Rigo"
    });
    app.controller("myController", function ($scope) {
        console.log($scope)
        $scope.nombre = "Thiago"

    });

    app.controller("childController", function ($scope) {
        
    });

}());
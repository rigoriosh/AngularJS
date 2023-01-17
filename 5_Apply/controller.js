(function () {
    'use strict';

    var app = angular.module('mainModule', []);

    app.controller("myController", function ($scope) {
        console.log($scope)
       
        $scope.nombre = "Rigo"
        /* setTimeout(() => {
            $scope.$apply(function () {
                $scope.nombre = "Learning Angular"
            });
        }, 2000); */
        document.querySelector("#btnTest").addEventListener("click", function () {
            $scope.$apply(function () {
                $scope.nombre = "Learning AngularJS";
            });
            console.log("Learning AngularJS")
        })

    })

}());
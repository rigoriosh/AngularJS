(function () {
    'use strict';

    var app = angular.module('toDoList', ['LocalStorageModule']);

    app.controller("ToDoListController", function ($scope, localStorageService) {
        console.log($scope)
       
        $scope.toDo = [];
        /* 
        {
            descripcion: 'Terminar curso angular',
            fecha: '23-12-22'
        }
         */
        $scope.newAct = {
            descripcion: '',
            fecha: ''
        }
        $scope.addActividad = function () {
            $scope.toDo.push($scope.newAct)
            $scope.newAct = {
                descripcion: '',
                fecha: ''
            }
        }
        

    })

}());
(function () {
    'use strict';

    var app = angular.module('toDoList', ['LocalStorageModule']);

    app.controller("ToDoListController", function ($scope, localStorageService) {
        console.log($scope)

        $scope.testing = "";
       
        if (localStorageService.get("angular-todolist")) {
            $scope.toDo = localStorageService.get("angular-todolist");
        } else {
            $scope.toDo = [];
        }
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
            localStorageService.set("angular-todolist", $scope.toDo)
        }

        $scope.cleanToDoList = () => {
            $scope.toDo = [];
            localStorageService.set("angular-todolist", [])
        }

        $scope.$watchCollection("newAct", function (newValue, oldValue) {
            console.log("oldValue => ",oldValue)
            console.log("newValue => ",newValue)
        });

        $scope.$watch(function () {
            return $scope.testing
        }, function (newValue, oldValue) {
            console.log("oldValue => ",oldValue)
            console.log("newValue => ",newValue)
        });

        $scope.$watch(function () {
            return $scope.newAct.descripcion
        }, function (newValue, oldValue) {
            console.log("oldValue => ",oldValue)
            console.log("newValue => ",newValue)
        });
        

    })

}());
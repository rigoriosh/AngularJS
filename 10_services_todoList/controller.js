(function () {
    'use strict';

    var app = angular.module('toDoList', ['LocalStorageModule']);

    app.service('ToDoService', function (localStorageService) {
        this.key = "angular-todolist";
        if (localStorageService.get(this.key)) {
            this.activities = localStorageService.get(this.key);
        } else {
            this.activities = [];
        }
        this.addActividad = function (newAct) {
            this.activities.push(newAct)
            this.updateLocalStorage();
        }
        this.updateLocalStorage = function () {
            localStorageService.set(this.key, this.activities)
        }
        this.clean = function () {
            this.activities = [];
            this.updateLocalStorage();
            return this.getAll()
        }
        this.getAll = function () {
            return this.activities;
        }
        this.removeItem = function (item) {
            this.activities = this.activities.filter(e => e != item);
            this.updateLocalStorage();
            return this.getAll()
        }
    });

    app.controller("ToDoListController", function ($scope, ToDoService) {
        console.log($scope)
        $scope.toDo = ToDoService.getAll();
        $scope.newAct = {
            descripcion: '',
            fecha: ''
        }
        $scope.addActividad = function () {
            ToDoService.addActividad($scope.newAct);
            $scope.newAct = {
                descripcion: '',
                fecha: ''
            }
        }
        $scope.cleanToDoList = () => {
            ToDoService.clean();
            $scope.toDo = ToDoService.getAll();
        }
        $scope.removeAct = function (item) {
            console.log(11111);
            $scope.toDo = ToDoService.removeItem(item);
            $scope.toDo = ToDoService.getAll();
        }
    })

}());
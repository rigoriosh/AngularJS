(function () {
    'use strict';

    var app = angular.module('toDoList', ['LocalStorageModule']);

    app.factory('ToDoService', function (localStorageService) {
        let todoService = {};
        todoService.key = "angular-todolist";
        if (localStorageService.get(todoService.key)) {
            todoService.activities = localStorageService.get(todoService.key);
        } else {
            todoService.activities = [];
        }
        todoService.addActividad = function (newAct) {
            todoService.activities.push(newAct)
            todoService.updateLocalStorage();
        }
        todoService.updateLocalStorage = function () {
            localStorageService.set(todoService.key, todoService.activities)
        }
        todoService.clean = function () {
            todoService.activities = [];
            todoService.updateLocalStorage();
        }
        todoService.getAll = function () {
            return todoService.activities;
        }
        todoService.removeItem = function (item) {
            todoService.activities = todoService.activities.filter(e => e != item);
            todoService.updateLocalStorage();
        }
        return todoService;
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
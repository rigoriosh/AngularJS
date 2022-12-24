(function () {
    'use strict';

    var app = angular.module('MyFirstApp', []);

    app.controller("myController", function ($scope, $http) {
        console.log($scope)
       
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .then(function ({data}){
                $scope.posts = data
            },function (error){
                console.log(error)
            });

        $scope.addPost = function () {
            $http.post('https://jsonplaceholder.typicode.com/posts',{
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo RRH',
                    body: 'bar RRH',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(function name(data, status, headers, config) {
                console.log(data, status, headers, config)
            },function (error, status, headers, config){
                console.log(error, status, headers, config)
            });
        }
        

    })

}());
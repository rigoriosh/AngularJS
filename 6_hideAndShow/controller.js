(function () {
    'use strict';

    var app = angular.module('MyFirstApp', []);

    app.controller("myController", function ($scope, $http) {
        console.log($scope)
        $scope.posts = [];
        $scope.loading = true;
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .then(function ({data}){
                console.log(data)
                $scope.posts = data
                $scope.loading = false;
            },function (error){
                console.log(error)
                $scope.loading = false;
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
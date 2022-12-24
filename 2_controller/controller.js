(function () {
    'use strict';

    var app = angular.module('MyFirstApp', []);

    app.controller("FirsController", [ "$scope", function (myScope) {
        console.log(myScope)
       
        myScope.nombre = "Rigo"
        
        myScope.comentarios = [
            {
                comentario: "Buen tutorial",
                autor:"Rigo"
            },
            {
                comentario: "Mal tutorial",
                autor:"Luisa"
            }
        ];

        myScope.nuevoComentario={
            comentario: "",
            autor:""
        }
        myScope.agregarCOmentario=function () {
            console.log(1111)
            if (myScope.nuevoComentario.comentario !== '' && myScope.nuevoComentario.autor !== '') {
                myScope.comentarios.push(myScope.nuevoComentario)
            }
        }

    }])

}());
module.exports = angular.module("angularjsSeed")
    .controller("HomeController", ["$scope", function ($scope) {

        var self = this

        self.message = "Hola Mundo"
    }])
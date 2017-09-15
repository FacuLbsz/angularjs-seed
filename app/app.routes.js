angular.module('angularjsSeed')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, send to /business
        $urlRouterProvider.otherwise("/home")

        $stateProvider
            .state('home', {//nested state [products is the nested state of business state]
                url: "/home",
                templateUrl: "app/components/home/homeView.html",
                controller: "HomeController",
                controllerAs: "ctrl"
            })
    }])
    .config(["$locationProvider", function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);
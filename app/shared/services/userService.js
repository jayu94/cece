define([], function() {
    "use strict";

    require(['app'], function(app){
        var config = ['$http', '$rootScope', '$localStorage', userService];

        function userService($http, $rootScope, $localStorage) {
            var user = {};

            var service = {
                login: login,
                logout: logout,
                authenticated: authenticated
            };

            function login(email, password){
                var user = { email: email, password: password };

                return $http.post($rootScope.api + "/auth", user)
                    .then(
                        function(response){
                            $localStorage.access_token = response.data.token;
                            $localStorage.user = user;
                        }
                    );
            }

            function logout (){
                $localStorage.access_token = null;
                $localStorage.user = {};
            }

            function authenticated (){

                return $localStorage.access_token !== null && $localStorage.access_token !== undefined;
            }
            
            return service;
        }

        app.factory('userService', config);
    });
});
app.controller('loginController', function($scope, $http) {
    $scope.login = "";
    $scope.mp = "";

    $scope.sub=function(){

            //  $location.path('/accueil');


            $http({
                method: 'GET',
                url: './js/data.js'
            }).then(function successCallback(response) {

                for (var i=0;i < response.data.length;i++ ){
                    console.log($scope.login,$scope.mp);
                    if(response.data[i].name == $scope.login && response.data[i].mp == $scope.mp){

                        $scope.formup=true;

                    }  else {
                        alert('login incorrect');

                    }
                }

            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
          

    };
});


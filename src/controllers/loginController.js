app.controller('loginController', function($scope) {
    $scope.login = "";
    $scope.mp = "";

    $scope.sub=function(){
        if($scope.login=='khalil'&& $scope.mp=='ait'){
            //  $location.path('/accueil');
            $scope.formup=true;
            alert('login zabour');
        }else {
            alert('login incorrect');
        }
    };
});
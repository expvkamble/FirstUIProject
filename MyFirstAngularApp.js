var app = angular.module('myfirstapp',[]);

app.controller('MyFirstApp', function($scope,$http){
    $scope.formModel = {};
    $scope.onSubmit = function(valid) {
    
        if(valid) {
        console.log("Submit is clicked !!!");     
        } else {
                console.log("Invalid form ");
            }
 
    };   
});
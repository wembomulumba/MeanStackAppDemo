// Author : Wembo Mulumba

function AppCtrl ($scope, $http){
   
   // console.log('Hello world from controller AppCtrl');
               
    $http.get('/contactlist').success(function(response){

        $scope.contactlist = response;
        
    });

    
}
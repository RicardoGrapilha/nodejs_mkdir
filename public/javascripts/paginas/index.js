var myApp = angular.module('myApp',[]);
  	myApp.filter('trim', function () {
	    return function(value) {
	        if(!angular.isString(value)) {
	            return value;
	        }  
	        return value.replace(/^\s+|\s+$/g, ''); // you could use .trim, but it's not going to work in IE<9
	    };
	});
	myApp.controller('controllerMain', ['$scope','$http', function($scope, $http) {
		$scope.msgRetorno=''	;
	  	$scope.criarPasta = function(){
	  	if($scope.pasta.trim()!=''){
	  		$http.post('/usuario/cadastro_pasta', {nome_pasta: $scope.pasta}).then(function(response){
	            //if(response.status==200){
	            //    if(response.data.length>0){
	            	$scope.msgRetorno= response.data.msg;
	            //    }
	            //}
	            
	        }, function(data){
	            console.log(data);
	        });	
	  	}
	  	
	  }
	}]);
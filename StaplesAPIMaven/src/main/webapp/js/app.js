var app = angular.module("MyApp", ["ngRoute"]);
var userDetails;
app.config(function($routeProvider, $httpProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'IndexCtrl'
	})
	.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'LoginCtrl'
	})
	.when('/profile', {
		templateUrl: 'profile/profile.html'
	})
	.when('/searchByTerm', {
		templateUrl: 'search/searchByTermResult.html'
	})
	.otherwise({
		redirectTo: '/home'
	});
});

app.controller("LoginCtrl",
		function($scope, $http,$location,$rootScope) {
	$scope.login = function(user){
	
/*		$http.post("/loginUser", user)
        .success(function (response) {
   	     console.log(response);
       });*/
		$http.get("json/login.json")
		.success(function (response){
			$rootScope.profile="xxx";
			userDetails = response;
			console.log(userDetails);
			$location.url("/profile");
		})
		.error(function (err){
			$scope.logerr="err";
			console.log(err);
		});
	};
});

app.controller("IndexCtrl",
		function($scope, $http,$location,$rootScope) {
	$scope.logout = function(){
		$http.get("json/logout.json"
		/*{
			method: "DELETE",
			url: "https://aadvq11nwbv01.staples.com/wcs/resources/v1/member?storeId=10101&responseFormat=json",
			header: "Content-Type: application/json",
			header: "Accept: application/json",
			header: "Access-Control-Allow-Origin:*",
			header: "wcTrustedToken:"+ userDetails.wcTrustedToken,
		    header: "wcToken:"+ userDetails.wcToken
			
		}*/)
		.success(function (response){
			$rootScope.profile=null;
			userDetails = response;
			console.log(userDetails);
			$location.url("/home");
		})
		.error(function (err){
			console.log("Cannot logout");
		});
	};
	
	$scope.searchItem = function(){
		var title = $scope.searchByTitle;
		$http.get( "json/search_by_term.json"
				
				/*{
			method: "POST",
			url: "https://aadvq11nwbv01.staples.com/wcs/resources/v1/search/OSA/en_US/bySearchTerm?storeId=10101&responseFormat=json",
			header: "Content-Type: application/json",
			header: "Allow-Control-Allow-Origin:*",
			header: "wcTrustedToken:"+ userDetails.wcTrustedToken,
		    header: "wcToken:"+ userDetails.wcToken,
			data: title
		}*/)
		.success(function (response){
			console.log(response);
			$scope.searchRes = response;
			$location.url("/searchByTerm");
		})
		.error(function (err){
			console.log(err);
		});
	};
});




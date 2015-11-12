var app = angular.module("OrderApp",[]);

app.controller("OrderCtrl",
		function($scope, $http,$location,$rootScope) {
	
	$http({
		method: "GET",
		url: "https://aadvq11nwbv01.staples.com/wcs/resources/v1/order/7629480675?storeId=10101&responseFormat=json",
		header: "Accept: application/json",
		header: "Access-Control-Allow-Origin:*",
		header: "wcTrustedToken:114508295%2cWjm%2bNC6K0vtlF%2fxYm0Z6m1EHIPU%3d",
	    header: "wcToken:114508295%2c%2fqNGhDEoVKoEMf7L103bMsS9pqwuWXM7X1LhPwbZufqI5Rbec6u%2bZbICsbFbOv31vEyScVcHtc%2bQ%0a2e67xPtSNG3gxPO6GtPOB4Bkty8qDNi96eaysRoaKLN1iswt2St1eLxDbr19FjqVZuQC7V7YgA%3d%3d"
		
	})
	.success(function (response){
		console.log(response);
	})
	.error(function (err){
		console.log("error here");
	});
});

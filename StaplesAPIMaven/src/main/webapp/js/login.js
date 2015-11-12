/**
 * 
 */
$(document).ready(function() {
	jQuery.support.cors = true;
	var customerid = jQuery("#customeridinput").val();
	var userid = jQuery("#useridinput").val();
	var password = jQuery("#passwordinput").val();
	$("button").click(function(){ 
		alert(userid);
		$.ajax({
			type: 'POST',
		    url:  "https://aadvq11nwbv01.staples.com/wcs/resources/v1/member/login?storeId=10101&responseFormat=json",
		    header: "Content-Type: application/json",
 			header: "Accept: application/json",
 			data:{
 				"companyID": customerid,
				"userID": userid,
				"password": password
 			},
		    crossDomain: true,
			dataType: 'json',
			converters: {
				'text json': true
			},
			success: function(response) {
				 obj = JSON.parse(response);
				 alert(obj);
			},
			error: function(error){
			  alert(error);	
			}
		});//end of ajax call
		
	});
});
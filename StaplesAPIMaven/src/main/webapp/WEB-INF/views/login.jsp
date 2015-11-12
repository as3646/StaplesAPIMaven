
<!-- Bootstrap Core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- Custom CSS -->
<link href="css/homepage.css" rel="stylesheet">
<link rel="shortcut icon" href="res/short.png">
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/font-awesome.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<jsp:include page="header.jsp"></jsp:include>
<div class="container">
	<h2>Log In to Your Account</h2>

	<h5 class="err-msg">You have entered an invalid
		Customer ID, User ID, or password. Please try again.</h5>
	<form name="LoginForm">

		<div class="control-group">
			<label class="control-label" for="customeridinput">Customer
				ID:</label>
			<div class="controls">
				<input id="customeridinput" name="customeridinput"
					class="form-control" type="text" placeholder="0001018242001NAT"/>
			</div>
		</div>

		<div class="control-group">
			<label class="control-label" for="useridinput">User ID:</label>
			<div class="controls">
				<input id="useridinput" name="useridinput"
					class="form-control" type="text" placeholder="CSR"/>
			</div>
		</div>

		<div class="control-group">
			<label class="control-label" for="passwordinput">Password:</label>
			<div class="controls">
				<input id="passwordinput" name="passwordinput"
					class="form-control" type="password" placeholder="********"/>
			</div>
		</div>

		<!-- Button -->
		<div class="control-group">
			<label class="control-label" for="signin"></label>
			<div class="controls">
				<button id="signin" name="signin"
					class="btn btn-success">Sign In</button>
			</div>
		</div>

	</form>
	<!--End of StplLogon form-->
</div>

<jsp:include page="footer.jsp"></jsp:include>

<!-- jQuery -->
<script src="js/jquery.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>

<!-- Custom JavaScript -->
<script src="js/modernizr.js"></script>

<script type="text/javascript">
$(document).ready(function() {

	jQuery.support.cors = true;

	$("button").click(function(){ 
		alert($("#customeridinput").val());

		$.ajax({
			type: 'POST',
		    url:  "https://qa2.api.staplesadvantage.com/sa/v1/member/login?client_id=tGJrKaTqq1GFmwGApGsSba6FHY4qWcCy&storeId=10101",
		    header: "Content-Type: application/json",
 			header: "Accept: application/json",
 			data:{
 				"companyID": $("#customeridinput").val(),
				"userID":  $("#useridinput").val(),
				"password": $("#passwordinput").val()
 			},
		    crossDomain: true,
			dataType: 'json',
			converters: {
				'text json': true
			},
			success: function(response) {
				 obj = JSON.parse(response);
				 alert(response.masterAccountNumber);
			},
			error: function(error){
			  //ert(error);	
			}
		});//end of ajax call
		
	});
});
</script>
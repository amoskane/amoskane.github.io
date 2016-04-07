$(document).ready(function() {
	$("#js-submit").click(function(e)  {

		$("#get-news .spinner").html('<img src="/images/loader.gif" alt="loading..." class="spin-mesg" />');

		$.ajax({
			url: '../DROPBOX_NEWSLETTER_SERVICE',
			timeout: 7000,
			data: $("#get-news").serialize(),
			dataType: 'json',
			success: function (data) {
				$(".spin-mesg").remove();
				if(data.message=="The Exception is name is Null or Empty"){
					$("#get-news .error").html("<span>Please enter a name.</span>");
				}else if(data.message=="The Exception is email is Null or Empty"){
					$("#get-news .error").html("<span>Please enter an email.</span>");
				}else if(data.result[0]==null){
					$("#get-news .error").html("<span>The newsletter may not available in your area. Sorry!</span>");
				}
			},
			error: function () {
				$(".spin-mesg").remove();
				$("#get-news").html("We can't seem to reach the newsletter signup service right now. Please try again later.");
			}
		});
	});

	$("#js-submit").keypress(function(e) {
		if (e.which == 13) {
			$("#js-submit").click();
		}
	});

});

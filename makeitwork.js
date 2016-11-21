$(document).ready(function() {
	// $("#js-submit").click(function(e)  {

	// 	$("#get-news .spinner").html('<img src="/images/loader.gif" alt="loading..." class="spin-mesg" />');

	// 	$.ajax({
	// 		url: '../DROPBOX_NEWSLETTER_SERVICE',
	// 		timeout: 7000,
	// 		data: $("#get-news").serialize(),
	// 		dataType: 'json',
	// 		success: function (data) {
	// 			$(".spin-mesg").remove();
	// 			if(data.message=="The Exception is name is Null or Empty"){
	// 				$(".form__errors").html("<span>Please enter a name.</span>");
	// 			}else if(data.message=="The Exception is email is Null or Empty"){
	// 				$(".form__errors").html("<span>Please enter an email.</span>");
	// 			}else if(data.result[0]==null){
	// 				$(".form__errors").html("<span>The newsletter may not available in your area. Sorry!</span>");
	// 			}
	// 		},
	// 		error: function () {
	// 			$(".spin-mesg").remove();
	// 			$("#get-news").html("We can't seem to reach the newsletter signup service right now. Please try again later.");
	// 		}
	// 	});
	// });

	// $("#js-submit").keypress(function(e) {
	// 	if (e.which == 13) {
	// 		$("#js-submit").click();
	// 	}
	// });
	// helper function to get an element's exact position
function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
      var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
 
      xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
      yPosition += (el.offsetTop - yScrollPos + el.clientTop);
    } else {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}

$("body").click(function(e)  {
	//var el = document.querySelector("body");
	var position = getPosition(el);
	alert("The click was located at: " + position.x + ", " + position.y);
	console.log("x is "+x",y is "+y);
}

});

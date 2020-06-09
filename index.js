$("#flip").click(function(){
	$("#front, #back").addClass("toreverse");
	window.setTimeout(function() {
		// $("#front, #back").removeClass("toreverse");
		console.log("flippy");
	}, 500);
});
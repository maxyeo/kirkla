$("#flip").click(function(){
	$("#front, #back").addClass("toreverse");
	window.setTimeout(function() {
		$("#front, #back").removeClass("toreverse");
	}, 500);
});
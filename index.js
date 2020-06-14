var counter = 0;

document.getElementById("front-flip").addEventListener("click", function() {
	counter++;
	// add classes to trigger flip animation
	document.getElementById("front").classList.add("toreverse");
	document.getElementById("back").classList.add("toreverse");
	window.setTimeout(function() {
		// remove classes to revert back to initial state
		document.getElementById("front").classList.remove("toreverse");
		document.getElementById("back").classList.remove("toreverse");

		// Put back content onto front
		document.getElementById("front-roast").innerHTML = msgs[counter].roast;
		document.getElementById("front-message").innerHTML = msgs[counter].message;
		document.getElementById("front-name").innerHTML = msgs[counter].name;
		document.getElementById("front").style.background = msgs[counter].background;
		if (counter !== msgs.length - 1) {
			document.getElementById("front-flip").innerHTML = "Next";
		}

		// Load next message on back card
		if (counter < msgs.length - 1) {
			// if not end of list yet
			document.getElementById("back-roast").innerHTML = msgs[counter + 1].roast;
			document.getElementById("back-message").innerHTML = msgs[counter + 1].message;
			document.getElementById("back-name").innerHTML = msgs[counter + 1].name;
			document.getElementById("back").style.background = msgs[counter + 1].background;
			if (counter + 1 === msgs.length - 1) {
				// if end of list
				document.getElementById("back-flip").classList.add("end");
			}
		} else {
			// if end of list
			document.getElementById("front-flip").classList.add("end");
		}
	}, 500);
});

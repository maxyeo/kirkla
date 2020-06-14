var counter = 1;

while (counter < msgs.length) {
	var listItem = document.createElement("div");
	listItem.classList.add("list-item");
	var roast = document.createElement("h1");
	roast.innerHTML = msgs[counter].roast;
	var message = document.createElement("p");
	message.innerHTML = msgs[counter].message;
	var author = document.createElement("p");
	author.innerHTML = msgs[counter].name;
	listItem.appendChild(roast);
	listItem.appendChild(message);
	listItem.appendChild(author);
	document.getElementById("list").appendChild(listItem);
	counter++;
}
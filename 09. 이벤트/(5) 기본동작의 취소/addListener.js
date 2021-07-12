document.querySelector('a').addEventListener(click, function(event) {
	if (document.getElementById('prevent').checked)
		event.preventDefault();
});

document.querySelector('form').addEventListener(click, function(event) {
	if (document.getElementById('prevent').checked)
		event.preventDefault();
});
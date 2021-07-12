var t = document.getElementById('target');
t.addEventListener('change', function(event){
	document.getElementById('result').innerHTML = event.target.value;
})
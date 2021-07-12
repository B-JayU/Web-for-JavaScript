var t= document.getElementById('target');
t.addEventListener('blur', function(event){
	alert('blur');
});
t.addEventListener('focus',function(event){
	alert('focus');
});
var t = document.getElementById('target1');
t.onclick = function(){
	alert('Hello world');
}

var t2 = document.getElementById('target2');
t2.onclick = function(event){
	/*
	alert('Hello world, ' + event.target.value)
	console.dir(event);
	console.log(window.event);
	*/
	var event = event || window.event;
	var target = event.target || event.srcElement;
	console.log(target);
}
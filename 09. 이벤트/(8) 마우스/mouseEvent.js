var t = document.getElementById('target');
function handler(event){
	var info = document.getElementById('elm'+event.type);
	var tiem = new Date();
	var timestr = time.getMilliseconds();
	info.innerHTML = (timestr);

	if(event.altKey) {
		document.getElementById('elmaltKey').innerHTML= timestr;
	}
	if(event.ctrlKey){
		document.getElementById('elmctrlKey').innerHTML = timestr;
	}
	if(event.shiftKey){
		document.getElementById('elmshiftKey').innerHTML = timestr;
	}

	document.getElementById('elemclientx').innerHTML = event.clientX;
	document.getElementById('elemclienty').innerHTML = event.clientY;
}
t.addEventListener('click', handler);
t.addEventListener('dblclick', handler);
t.addEventListener('mousedown', handler);
t.addEventListener('mouseup', handler);
t.addEventListener('mousemove', handler);
t.addEventListener('mouseover', handler);
t.addEventListener('mouseout', handler);
t.addEventListener('contextmenu', handler);
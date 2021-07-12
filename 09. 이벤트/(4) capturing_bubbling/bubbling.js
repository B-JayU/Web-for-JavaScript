function handler(event){
	var phases = ['capturing', 'target', 'bubbling']
	console.log(event.target.nodeName, this.nodeName, phases[event.eventPhase-1])
      }
      document.getElementById('target').addEventListener('click', handler, false);
      
      document.querySelector('fieldset').addEventListener('click', handler, false);
      document.querySelector('body').addEventListener('click', handler, false);
      document.querySelector('html').addEventListener('click', handler, false);
      
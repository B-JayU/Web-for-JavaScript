var t = document.getElementById('target');
  if (t.addEventListener){
    t.addEventListener('click', function(event) {
      alert('Hello world, '+ event.target.value)
    });
  }else if(t.attachEvent) {
    t.attachEvent('onclick', function(event) {
      alert('Hello world, '+ event.target.value)
    });
  }

  var t = document.getElementById('target1');
  t.addEventListener('click', function(event){
    alert(1);
  });
  t.addEventListener('click', function(event) {
    alert(2);
  });

  var t1 = document.getElementById('target11');
  var t2 = document.getElementById('target22');
  function btn_listener(event){
    switch(event.target.id){
      case 'target11':
        alert(1);
        break;
      case 'target22':
        alert(2);
        break;
    }
  }
  
  t1.addEventListener('click', btn_listener(event));
  t2.addEventListener('click', btn_listener(event));
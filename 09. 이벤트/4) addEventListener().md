## addEventListener()
- addEventListener은 이벤트를 등록하는 가장 권장되는 방식이다.
- 이 방식을 이용하면 여러개의 이벤트 핸들러를 등록할 수 있다.

```html
  <!DOCTYPE html>
  <html>
    <body> 
      <input tupe="button" id="target" value="button" />
      <script type="text/javaScript" src="addEventListener.js"></script>
    </body>
  </html>
```

- addEventListener 와 attachEvent(i.e 8이하 버전) 의 사용
```javascript
  var t = document.getElementById('target');
  if (t.addEventListener){
    t.addEventListener('click', function(event) {
      alert('Hello world, '+ event.target.value)l
    });
  }else if(t.attachEvent) {
    t.attachEvent('onclick', function(event) {
      alert('Hello world, '+ event.target.value)l
    });
  }
```

- addEventLister의 property 방식의 적용
  - 마지막 최종 하나의 function만 EventListener로 등록된다.
```javascript
  var t = document.getElementById('target');
  t.addEventListener('click', function(event){
    alert(1);
  });
  t.addEventListener('click', function(event) {
    alert(2);
  });
```

- EventListener 재활용
``` javascript
  var t1 = document.getElementById('target1');
  var t2 = document.getElementById('target2');
  function btn_listener(event){
    switch(event.target.id){
      case 'target1':
        alert(1);
        break;
      case 'target2':
        alert(2);
        break;
    }
  }
  
  t1.addEventListener('click', btn_listener);
  t2.addEventListener('click', btn_listener);
```

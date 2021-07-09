## inline
- 인라인(inline) 방식은 이벤트르 이벤트 대상의 태그 속성으로 지정하는 것이다.
``` html
  <input type="button" onclick="alert('Hello world');" value="button" />
```
- 이벤트가 발생한 대상을 필요로하는 경우 this를 통해서 참조할 수 있다.
```html
  <!DOCTYPE html>
  <body>
  <html>
  <input type="button" id="target" onclick="alert('Hello world, ' + document.getElementById('target').value);" value="button" />
  <input type="button" onclikc="alert('Hello world, ' + this.value);" value="button" />
  </body>
  </html>
```

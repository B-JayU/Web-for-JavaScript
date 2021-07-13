## POST 방식
- GET과 POST 방식

- time2.html
``` html
  <!DOCTYPE html>
  <html>
  <body>
    <p> time : <span id="time"></span> </p>
    <select id="timezone">
      <option value="Asia/Seoul">asia/seoul</option>
      <option value="America/New_York">America/New_York</option>
    </select>
    <select id="format">
      <option value="y-m-d H:i:s">Y-m-d H:i:s</option>
      <option value="Y-m-d">Y-m-d</option>
    </select>
    <input type="button" value="execute" id="execute" />
    <script type="text/javaScript" src="time2.js">
   </body>
  </html>
```

- time2.js
```javascript
  document.querySelector('input').addEventListener('click', function(event){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './time2.php');
    xhr.onreadystatechange = function(){
      document.querySelector('#time').innerHTML = xhr.responseText;
    }
    var data = '';
    data += 'timezone=' + document.getElementById('timezone').value;
    data += '&format=' + document.getElementById('format').value;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
  });
```

- time2.php
``` php
  <?php
  $d1 = new DateTime;
  $d1->setTimezone(new DateTimezone($_POST['timezone']));
  echo $d1->format($_POST['format']);
  ?>
```

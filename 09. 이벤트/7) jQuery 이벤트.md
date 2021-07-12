## jQuery 이벤트
- jQuery는 이벤트와 관련해 편리한 기능을 제공한다.
``` html
  <html>
  <body>
  <input type="button" id="pure" value="pure" />
  <input type="button" id="jquery" value="jQuery" />
  <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
  
  <script>
    // 순수하게 구현했을 때, 
    var target = document.getElementById('pure');
    if(targetaddEventListener) {
      target.addEvnetListener('click', function(event){
        alert('pure');
      });
    } else {
      target.attachEvent('onclick', function(event){
        alert('pure');
      });
    }
    
    // jQuery를 사용했을 때
    $('#jquery').on('click', function(event){
      alert('jQuery');
    })
  </script>
  </body>
  </html>
 ```

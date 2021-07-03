## attribute 과 property 방식의 차이점
- property 방식은 좀 더 간편하고 속도도 빠르지만, 실제 html 속성의 이름과 다른 이름을 갖는 경우가 있다.
- 이는 자바스크립트의 이름 규칙 때문이다.

<table>
	<th> attribute
	<th> property
    
  <tr>
	  <td> class
	  <td> className

  <tr>
	  <td> readonly
	  <td> readOnly
	<tr>
		<td> rowspan
		<td> rowSpan
	<tr>
		<td> colspan
		<td> colspan
	<tr>
		<td> usemap
		<td> userMap
	<tr>
		<td> frameborders
		<td> frameBorder
	<tr>
		<td> for
		<td> htmlFor
	<tr>
		<td> maxlength
		<td> maxLength
      
</table>

- 심지어 속성과 프로퍼티는 값이 다를수도 있다. 아래 코드를 실행한 결과는 속성과 프로퍼티의 값이 꼭 같은 것은 아니라는 것을 보여준다. 

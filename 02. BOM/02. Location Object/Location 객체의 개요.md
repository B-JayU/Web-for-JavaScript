## Location 객체

- 현재 웹 브라우저 창에 열려있는 문서의 url을 알려주는 객체
- 문서의 주소와 관련된 객체로 Window 객체의 프로퍼티이다.
	- url 변경이 가능하고, 문서의 위치와 관련해서 다양한 정보를 얻을 수 있다.

- 현재 윈도우의 URL 알아내기
	- console.log(location.toString(), location.href);

- URL Parsing
	- location 객체는 URL을 의미에 따라서 별도의 프로퍼티로 제공하고 있다.
		- console.log(location); // 프로퍼티를 확인하기
		- protocol, host, port, pathname, search, hash etc

		- https://opentutorials.org:80/module/1?id=1#hash
			- location.protocol : 프로토콜 정보 
			  - => console.log(location.protocol); => https:
			- location.host : 컴퓨터를 식별하는 정보 
			  - => console.log(location.host); => opentutorials.org
			- location.port : 서버 컴퓨터에 설치되어 있는 애플리케이션을 식별하는 번호
				- => console.log(location.port); => 80
			- location.pathname : 서버 애플리케이션이 가지고 있는 특정한 정보 
			  - => console.log(location.pathname); => module/1
      - location.search : 서버 애플리케이션에게 전달한 값 
        - => console.log(location.search); => id=1
      - location.hash : 애플리케이션(웹 페이지 상)의 특정 위치를 식별하는 식별자
        - => console.log(location.hash); => #hash

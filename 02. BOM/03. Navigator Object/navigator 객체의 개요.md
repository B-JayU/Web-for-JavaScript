## Navigator 객체
- 브라우저의 정보를 제공하는 객체 
- 호환성 문제등을 위해서 사용

- Navigator 객체 프로퍼티 열람
	- console.dir(navigator);

## Main Property 알아보기
### appName
- 웹브라우저의 이름
- console.dir(navigator.appName);

### appVersion
- 브라우저의 버전, 현재 브라우저의 정보
- console.dir(navigator.appVersion);

### userAgent
- 브라우저가 서버측으로 전송하는 USER-AGENT HTTP 헤더의 내용
- appVersion과 비슷
- console.dir(navigator.userAgent);

### platform
- 브라우저가 동작하고 있는 운영체제에 대한 정보
- console.dir(navigator.platform);

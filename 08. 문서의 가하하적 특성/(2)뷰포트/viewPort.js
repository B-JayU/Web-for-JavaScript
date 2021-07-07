var t = document.getElementById('target');
setInterval(function(){
	console.log('getBoundingClientRect(top) : ', t.getBoundingClientRect().top, 'pageYOffset:', window.pageYOffset)
}, 1000)
// 1000 ms = 1 second 
// 1초에 한번씩 반복적으로 호출(시간을 지정할 수 있음) => 반복문과 유사

/*
	.getBoundingclientRect().top : 뷰포트에서 해당 element의 topR까지의 거리
*/

/*
	window.pageXOffset : x축 기준으로 오른쪽으로 스크롤 이동된 px 값
	window.pageYOffest : y축 기준으로 아래쪽으로 스크롤 이동된 px 값
*/
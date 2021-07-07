
document.getElementById('scrollBtn').addEventListener('click', function(){
	window.scrollTo(0, 1000);
	/*
		window.scrollTo(x, y)
		x : 문서의 왼쪽상단부터 시작하는 픽셀단위의 가로축
		y : 문서의 왼쪽상단부터 시작하는 픽셀단위의 세로축
		둘 다, 기준은 문서의 왼쪽상단(constant), viewPoint 시점이 기준이 아님.
	*/
})
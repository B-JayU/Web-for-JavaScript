var t = document.getElementById('target');
setInterval(function(){
	console.log('getBoundingClientRect(top) : ', t.getBoundingClientRect().top, 'pageYOffset:', window.pageYOffset)
}, 1000)
// 1000 ms = 1 second 
// 1�ʿ� �ѹ��� �ݺ������� ȣ��(�ð��� ������ �� ����) => �ݺ����� ����

/*
	.getBoundingclientRect().top : ����Ʈ���� �ش� element�� topR������ �Ÿ�
*/

/*
	window.pageXOffset : x�� �������� ���������� ��ũ�� �̵��� px ��
	window.pageYOffest : y�� �������� �Ʒ������� ��ũ�� �̵��� px ��
*/
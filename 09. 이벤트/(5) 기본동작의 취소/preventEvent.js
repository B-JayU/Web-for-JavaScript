document.querySelector('a').onclick = function(event) {
	if (document.getElementById('prevent').checked)
		return false;
};
// onclick ���� ��, function�� ����ǵ��� ������Ƽ ����

document.querySelector('form').onclick = function(event) {
	if (document.getElementById('prevent').checked)
		return false;
}
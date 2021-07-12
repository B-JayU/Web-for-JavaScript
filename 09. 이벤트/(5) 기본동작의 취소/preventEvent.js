document.querySelector('a').onclick = function(event) {
	if (document.getElementById('prevent').checked)
		return false;
};
// onclick 했을 때, function이 실행되도록 프로퍼티 대입

document.querySelector('form').onclick = function(event) {
	if (document.getElementById('prevent').checked)
		return false;
}
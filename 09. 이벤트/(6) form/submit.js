var t = document.getElementById('target');
t.addEventListener('submit', function(event){
	if(document.getElementById('name').value.length === 0){
		alert('Name �ʵ��� ���� ���� �Ǿ����ϴ�.');
		event.preventDefault();
	}
});
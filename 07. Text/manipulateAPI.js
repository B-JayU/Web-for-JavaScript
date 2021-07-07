var target = document.getElementById('targetMani').firstChild;
var data = document.getElementById('datasource');
var start = document.getElementById('start');
var end = document.getElementById('end');

function callAppendData() {
	target.appendData(data.value);
	// target�� �� �������� data.value�� �̾� ���̱�
}

function callDeleteData() {
	target.deleteData(start.value, end.value);
	/* 
		target�� data ù ���� index�� 1�� ����
		idx:start.value ���� end.value ������ŭ �����͸� ����
	*/
}
function callInsertData() {
	target.insertData(start.value, data.value);
	/* 
		target�� data ù ���� index�� 1�� ����
		idx:start.value ��ġ�� data.value�� ����
	*/	
}
function callReplaceData(){
	target.replaceData(start.value, end.value, data.value);
	/* 
		target�� data ù ���� index�� 1�� ����
		idx:start.value ���� end.value ������ŭ �����͸� data.value�� replace
		����� �����ͱ��̿� ������ ������ ���̰� ���� �ʿ�� ����.
	*/
}

function callSubstringData(){
	alert(target.substringData(start.value, end.value));
	/* 
		target�� data ù ���� index�� 1�� ����
		idx:start.value ���� end.value ������ŭ �����͸� alert() â���� �Ѱ���.
	*/
}

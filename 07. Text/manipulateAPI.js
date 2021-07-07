var target = document.getElementById('targetMani').firstChild;
var data = document.getElementById('datasource');
var start = document.getElementById('start');
var end = document.getElementById('end');

function callAppendData() {
	target.appendData(data.value);
	// target의 맨 마지막에 data.value를 이어 붙이기
}

function callDeleteData() {
	target.deleteData(start.value, end.value);
	/* 
		target의 data 첫 시작 index를 1로 간주
		idx:start.value 부터 end.value 개수만큼 데이터를 제거
	*/
}
function callInsertData() {
	target.insertData(start.value, data.value);
	/* 
		target의 data 첫 시작 index를 1로 간주
		idx:start.value 위치에 data.value를 삽입
	*/	
}
function callReplaceData(){
	target.replaceData(start.value, end.value, data.value);
	/* 
		target의 data 첫 시작 index를 1로 간주
		idx:start.value 부터 end.value 개수만큼 데이터를 data.value로 replace
		변경될 데이터길이와 변경할 데이터 길이가 같을 필요는 없음.
	*/
}

function callSubstringData(){
	alert(target.substringData(start.value, end.value));
	/* 
		target의 data 첫 시작 index를 1로 간주
		idx:start.value 부터 end.value 개수만큼 데이터를 alert() 창으로 넘겨줌.
	*/
}

var t = document.getElementById('target');
console.log(t.getBoundingClientRect());
console.log('clientWidth:', t.clientWidth, 'clientHeight:', t.clientHeight);
// clientWidth와 clientHeight는 border을 제외한 너비와 높이를 의미함.
console.log(t.offsetParent); 
// 측정의 기준이 되는 element, 항상 <body> 태그가 기준이 되는 것은 아님.
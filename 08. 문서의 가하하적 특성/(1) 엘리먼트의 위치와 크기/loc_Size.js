var t = document.getElementById('target');
console.log(t.getBoundingClientRect());
console.log('clientWidth:', t.clientWidth, 'clientHeight:', t.clientHeight);
// clientWidth�� clientHeight�� border�� ������ �ʺ�� ���̸� �ǹ���.
console.log(t.offsetParent); 
// ������ ������ �Ǵ� element, �׻� <body> �±װ� ������ �Ǵ� ���� �ƴ�.
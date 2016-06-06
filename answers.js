function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}

function answer_2() {
	document.getElementById("q2-answer").innerHTML = "<ul><li>1. DOM에 접근하여 HTML을 수정 할 수 있다.</li><li>2. 페이지에서 일어나는 이벤트에 반응할 수 있다.</li></ul>";
}

function answer_3() {
	var t;
	t = document.getElementsByClassName("q34-answer");
	t[0].innerHTML = "<ul><li>1. Parent : 바로 위의 노드</li><li>2. Child : 바로 아래 레벨의 노드</li><li>3. Sibling : 같은 level의 노드(같은 부모)</li><li>4. Descendant : 노드 아래의 level에 있는 노드의 집합</li><li>5. Ancestor : 노드 위의 level에 있는 노드의 집합</li></ul>";
}
function answer_4() {
	var t;
	t = document.getElementsByClassName("q34-answer");
	t[1].innerHTML = "<ul><li>1. document.getElementById() : 주어진 Id를 가진 element를 return 한다(one)</li><li>2. document.getElementsByClassName() : 같은 ClassName을 가진 element를 리스트로 가져온다.(many)</li><li>3. document.getElementsByName() : 같은 Name을 가진 element를 리스트로 가져온다. Name은 주로 Input 태그에 쓰임(many)</li><li>4. document.getElementsByTagName : 같은 TagName을 가진 element를 리스트로 가져온다.(many)</li></ul>";
}

$('div p').next().click(function(){
	$('div p').next().text("Answer5");
});

$('div div.item').prev().click(function(){
	$('div div.item').prev().text("Answer5");
})

$('div div.item').click(function(){
	$('div div.item').attr('style', 'font-size:3em;');
})

$('div span.item').click(function(){
	$('div span.item').attr('style', 'font-size:3em;');
})

$('div div.item-group').next().dblclick(function(){
	$('div div.item-group').next().attr('style', 'Color:blue;');
})

$('div span.demo').next().dblclick(function(){
	$('div span.demo').next().attr('style', 'Color:blue;');
})
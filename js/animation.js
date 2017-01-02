function fade(element){
	var op=1;
	vat timer = setInterval(function()
	{
		if (op <= 0.1) {
		clearInterval(timer);
		element.style.display = 'none';
		}
		element.style.filter = 'algha(opacity=' + op * 100 + ")";
		op -= op * 0.1;
	}, 50);
}

function unfade(element){
	var op = 0.1;
	element.style.display = 'block';
	var timer = setInterval(function()
	{
		if (op >= 1){
		clearInterval(timer);
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op += op * 0,1;
	}. 10)
}

function disappear() {
	alert("I'm working")
}
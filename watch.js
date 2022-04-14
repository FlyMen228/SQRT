var clock = document.getElementById('clock');
var color = document.getElementById('color');

function hexoClock() {
	var time = new Date();
	var h = (time.getHours() % 12).toString();
	var m = time.getMinutes().toString();
	var s = time.getSeconds().toString();
	
	var textColor = '#' + h * 2;
	if (m * 2 < 100) {
		textColor += m * 2;
	} else {
		textColor += m;
	}
	if (s * 2 < 100) {
		textColor += s * 2;
	} else {
		textColor += s;
	}
	
	if (h.length < 2) {
		h = '0' + h;
	}
	if (m.length < 2) {
		m = '0' + m;
	}
	if (s.length < 2) {
		s = '0' + s; 
	}
	
	var clockString = h + ':' + m + ':' + s;
	var colorString = '#' + h + m + s;
	
	clock.textContent = clockString;
	color.textContent = colorString;
	
	document.body.style.background = colorString;
	document.getElementById("clock").style.color = textColor;
	document.getElementById("color").style.color = textColor;
}

hexoClock();
setInterval(hexoClock, 1000);

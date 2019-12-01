var text = document.getElementById("notouch");
var cookie = document.getElementById("cookie");


cookie.addEventListener("mouseover", update1);
cookie.addEventListener("mouseout", update2);



function update1() {
	text.innerHTML = "GET YOUR FUCKING HANDS OFF MY GOD DAMN COOKIE FUCK YOU";
	
}
function update2() {
	
	text.innerHTML = "don't touch my cookie ever again."
	
}
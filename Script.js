var navLinks = document.getElementById("navLinks");


function showMenu() {
	navLinks.style.right = "20px";
}
function hideMenu() {
	navLinks.style.right = "-300px";
	proshasonikBlink.style.display = "none";
	admissionBlink.style.display = "none";
}

var admissionBlink = document.getElementById("admissionBlink");
var proshasonikBlink = document.getElementById("proshasonikBlink");


function opacityproshasonik() {
	proshasonikBlink.style.display = "flex";
	admissionBlink.style.display = "none";
}



function opacityadmission() {
	admissionBlink.style.display = "flex";
	proshasonikBlink.style.display = "none";

}
window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");

	loader.classList.add("loader-hidden");

	loader.addEventListener("transitioned", () => {
		document.body.removeChild("loader");
	})
})
var news1 = "hello this is first news"
var news2 = "hello this is second news"
var news3 = "hello this is third news"

document.getElementById("news1").innerHTML = news1 ;
document.getElementById("news2").innerHTML = news2 ;
document.getElementById("news3").innerHTML = news3 ;
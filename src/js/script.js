//onLoad
window.addEventListener('load',function(){
	document.body.className = "loaded";
	dates()
})


//intro-me
let el = document.getElementById('intro-me');
function zoomMe(e){
	e.stopPropagation();
	this.classList.toggle('zoomed');
	window.removeEventListener('mousedown',zoomMe)
}

el.addEventListener('mousedown',zoomMe);
document.body.addEventListener('mousedown', function(){
	el.classList.remove('zoomed');
});


//Dates and Years
function dates(){
	
	let myExp = document.getElementById('myExp');
	let exp = 2013;
	let expMonth = 10;
	let now = new Date();
	let copyDate = document.getElementById('copyDate');

	copyDate.innerHTML = new Date().getFullYear();

	if(now.getMonth() + 1 === expMonth){
		myExp.innerHTML = now.getFullYear() - exp
	}
}
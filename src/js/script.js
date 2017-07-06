//onLoad
window.addEventListener('load',function(){
	document.body.className = "loaded";
	dates()
})


//intro-me
var el = document.getElementById('intro-me');
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
	
	var myExp = document.getElementById('myExp');
	var exp = 2013;
	var expMonth = 10;
	var now = new Date();
	var copyDate = document.getElementById('copyDate');

	copyDate.innerHTML = new Date().getFullYear();

	if(now.getMonth() + 1 === expMonth){
		myExp.innerHTML = now.getFullYear() - exp
	}
}
//onLoad
window.addEventListener('load',function(){
	document.body.className = "loaded";
	if(window.innerWidth > 1355){
		setTimeout(function(){
			document.getElementsByClassName('scroller')[0].className += ' loaded'
		}, 2000)
	}
	dates()
})


//intro-me
var el = document.getElementById('intro-me');
function zoomMe(e){
	e.stopPropagation();
	this.classList.toggle('zoomed');
	this.classList.remove('is-shadow');
	window.removeEventListener('mousedown',zoomMe)
}

el.addEventListener('mousedown',zoomMe);
document.body.addEventListener('mousedown', function(){
	el.classList.remove('zoomed');
});

//hire-me
var hireBtn = document.getElementById('hire-btn');
function rotate(){
	this.parentNode.className += " " + 'rotate'
}
hireBtn.addEventListener('mousedown',rotate)


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
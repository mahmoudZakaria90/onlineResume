//onLoad
window.addEventListener('load',function(){
	document.body.className = "loaded";
	document.querySelector('.splash').addEventListener('transitionend', function(){
		document.querySelector('.splash').style.display = "none";
		document.body.style.overflow = 'visible';
	}) 
	dates();
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


//Go back

let goUpBtn = document.querySelector('.go-up');

function goUp() {

	if(window.scrollY == 0){
		return;
	}
	window.scrollBy(0, -100)
	requestAnimationFrame(goUp)
}

goUpBtn.addEventListener('click', goUp);

function showGoUp() {
	let intro = document.querySelector('.intro');
	let introOffset = intro.offsetHeight;
	if(window.scrollY >= introOffset) {
		goUpBtn.classList.add('is-show');
	} else {
		goUpBtn.classList.remove('is-show');
	}

	goUpBtn.addEventListener('transitionend', function(){
		this.classList.add('is-animate')
	})
}

window.addEventListener('scroll', showGoUp)
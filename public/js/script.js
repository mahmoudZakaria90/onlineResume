//onLoad
window.location.href = "#intro"
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
function zoomMe(){
	this.classList.toggle('zoomed')
	window.removeEventListener('mousedown',zoomMe)
}

el.addEventListener('mousedown',zoomMe)


//hire-me
var hireBtn = document.getElementById('hire-btn');
function rotate(){
	this.parentNode.className += " " + 'rotate'
}
hireBtn.addEventListener('mousedown',rotate)


//Dates and Years
function dates(){
	
	var myExp = document.getElementById('myExp');
	var exp = 2013
	var expMonth = 10
	var now = new Date()

	if(now.getMonth() + 1 === expMonth){
		myExp.innerHTML = now.getFullYear() - exp
	}
}
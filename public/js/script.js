//onLoad
window.location.href = "#home"
window.addEventListener('load',function(){
	document.body.className = "loaded";
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

	var myBirthday = new Date("June 11, 1990")
	var now = new Date()
	if(now.getDate() === myBirthday.getDate() && now.getMonth() === myBirthday.getMonth()){
		myExp.innerHTML = now.getFullYear() - exp
	}
}
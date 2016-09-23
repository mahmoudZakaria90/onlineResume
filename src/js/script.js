//onLoad
function test(){
	alert('test')
}
test()
window.addEventListener('load',function(){
	test()
})

window.addEventListener('load',function(){
	document.body.className = "loaded"
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
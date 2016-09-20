// //docDirection
// function docDirection(){
// 	var doc = document.documentElement;
// 	var docLang = doc.getAttribute('lang')
// 	if (docLang == 'en'){
// 		doc.setAttribute('dir','ltr')
// 	}else{
// 		doc.setAttribute('dir','rtl')
// 	}
// }



// //Calling all functions on load events
// window.addEventListener('load',function(){
// 	docDirection();
// })


//Calling all functions on other events



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
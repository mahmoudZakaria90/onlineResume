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



//others
var el = document.getElementById('intro-me');
function zoomMe(){
	this.classList.toggle('zoomed')
	window.removeEventListener('mousedown',zoomMe)
}

function zoomOut(){
	el.classList.remove('zoomed')
}

el.addEventListener('mousedown',zoomMe)

//direction
function direction(){
	var doc = document.documentElement;
	var docLang = doc.getAttribute('lang')
	if (docLang == 'en'){
		doc.setAttribute('dir','ltr')
	}else{
		doc.setAttribute('dir','rtl')
	}
}



//Calling all functions on load events
window.addEventListener('load',function(){
	direction();

})
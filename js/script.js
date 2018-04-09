// Zadanie 9.5 Iterowanie po elementach DOM


var withButtonClass = document.getElementsByClassName('button');




for (var i = 0; i < withButtonClass.length; i++) {
	
	alert(withButtonClass[i].innerText);
}
function popup_head(str) {
	var popup = document.getElementById("myPopup");
	popup.style.visibility = "visible"
	var text = document.getElementsByClassName("popuptext");
	text[0].innerHTML=str
	setTimeout(() => { popup.style.visibility = "hidden"; }, 5000);
  }
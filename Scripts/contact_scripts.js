function popup(type) {
	var popup = document.getElementById("popup");
	var link = document.getElementById("popuplink")
	if (type == 1) {
		popup.innerHTML = "yogeshmohanraj@gmail.com";
		link.href = "mailto:yogeshmohanraj@gmail.com"
	}
	else if (type == 2) {
		popup.innerHTML = "(734) 623-3593";
		link.href = "tel:734-623-3593";
	}
	else if (type == 3) {
		popup.innerHTML = "github.com/yogeshmohanraj";
		link.href = "https://github.com/yogeshmohanraj";
	}
	else if (type == 4) {
		popup.innerHTML = "linkedin.com/in/yogeshmo/";
		link.href = "https://www.linkedin.com/in/yogeshmo/";
	}
}
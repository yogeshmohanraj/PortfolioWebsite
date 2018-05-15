
// Adds a selected card class to cards that have been clicked
function select_card(card_num) {
	var cards = document.getElementsByClassName("card");
		for (var i = 0; i < cards.length; i++) {
			cards[i].classList.remove("selected_card")
		}
		cards[card_num - 1].className += " selected_card";
}


// Determines if object is visible, the adds the "in-view class"
var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  	var rect = el.getBoundingClientRect();
  	return (
  		rect.top >= 0 &&
    	rect.left >= 0 &&
    	rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    	rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  	);
}
 
function callbackFunc() {
 	for (var i = 0; i < items.length; i++) {
    	if (isElementInViewport(items[i])) {
      		items[i].classList.add("in-view");
    		}
  		}
	}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
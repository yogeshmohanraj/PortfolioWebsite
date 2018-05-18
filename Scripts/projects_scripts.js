
// Adds a selected card class to cards that have been clicked
function select_card(card_num) {
	var cards = document.getElementsByClassName("card");
	for (var i = 0; i < cards.length; i++) {
		cards[i].classList.remove("selected_card");
    cards[i].classList.remove("card" + (i + 1).toString());
	}
  cards[card_num - 1].className += " selected_card";
  cards[card_num - 1].className += " card" + card_num.toString();
}


// Adds image of the project to selected card
function add_image(card_num) {
  // removes all images from previous selected cards
  var prev_img = document.getElementsByClassName("project_picture");

  if (prev_img.length != 0) {
    prev_img[0].parentNode.removeChild(prev_img[0]);
  }

  var img = document.createElement("img");
  img.className = "project_picture";
  img.src = "../Images/project_picture" + card_num.toString() + ".png";

  var current_card = document.getElementsByClassName("card" + card_num.toString());
  current_card[0].appendChild(img);
}


// sets and manages button links and text
function set_button(button, card_num) {
  button.className = "project_button";
  if (card_num == 1) {
    button.onclick = 
      function() { 
        window.open("https://github.com/yogeshmohanraj/PortfolioWebsite"); 
      };
    button.innerHTML = "GitHub";
  }
  else if (card_num == 2) {
    button.onclick = 
      function() { 
          window.open("../Pages/contact.html"); 
        };
    button.innerHTML = "Request Source Code";
  }
  else if (card_num == 3) {
    button.onclick = 
      function() { 
          window.open("../Pages/contact.html"); 
        };
    button.innerHTML = "Request Source Code";
  }
  else if (card_num == 4) {
    button.onclick = 
      function() { 
          window.open("../Pages/contact.html"); 
        };
    button.innerHTML = "Request Source Code";
  }
  else if (card_num == 5) {
    button.onclick = 
      function() { 
          window.open("../Pages/contact.html"); 
        };
    button.innerHTML = "Request Source Code";
  }
  else if (card_num == 6) {
    button.onclick = 
      function() { 
          window.open("https://drive.google.com/drive/folders/1ab4lvN4Egvc9PTWO0A4aN9lczBNP96Jp?usp=sharing"); 
        };
    button.innerHTML = "Team Drive Folder";
  }
}


// Adds button to card
function add_button(card_num) {
  // removes all buttons from previous selected cards
  var prev_button = document.getElementsByClassName("project_button");

  if (prev_button.length != 0) {
    prev_button[0].parentNode.removeChild(prev_button[0]);
  }

  var button = document.createElement("button");
  set_button(button, card_num);

  var current_card = document.getElementsByClassName("card" + card_num.toString());
  current_card[0].appendChild(button);
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
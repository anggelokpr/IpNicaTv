setTimeout(function(){ 
	var preload = document.getElementById("preload");
	var bodym = document.getElementById("bodym");
	preload.style.display = 'none';
	bodym.classList.remove("hidden");

}, 600);


var itemsmen = document.getElementById("menu_i");
let c = 0;
function scrollmenu() {
	if (c>=2){
		c=0;	
	}
	if(c==1){
		itemsmen.style.top = '-100vh';	
		c++;
	}
	if (c==0) {
		itemsmen.style.top = '10vh';
		c++;
	}
}

// INTERNATIONAL NUMBERS

var radio1 = document.getElementById('labelradio1');
var radio2 = document.getElementById('labelradio2');
var pontador = 0;

	 	radio1.style.border = "solid 5px transparent";
	 	radio1.style.padding = "5px";


function borderRadio2() {
	pontador = 1;
	if (pontador == 1) {
	 	radio2.style.border = "solid 5px #fff";
	 	radio2.style.padding = "5px";	 	
	 pontador = 0;
	 	radio1.style.border = "solid 5px transparent";

 	}
}

function borderRadio1() {
	pontador = 0;
	if (pontador == 0) {
	 	radio1.style.border = "solid 5px #fff";
	 	radio1.style.padding = "5px";
	pontador = 1;
	 	radio2.style.border = "solid 5px transparent";
 	}
}


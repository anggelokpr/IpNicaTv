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
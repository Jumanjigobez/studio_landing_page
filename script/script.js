const menu_btn = document.getElementById("menu_btn");
const menu = document.getElementById("menu");

openMenu = () => {
	menu_btn.innerHTML = `<i class="fa fa-times" onclick="closeMenu();">`;
	menu.style.display = "block";
}

closeMenu = () =>{
	menu_btn.innerHTML = `<i class="fa fa-bars" onclick="openMenu();">`;
	menu.style.display = "none";
}
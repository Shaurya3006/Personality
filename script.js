function person(){
	var name=document.getElementById("ab").value;
	// alert(name);
	document.getElementById("img").height=300;
	document.getElementById("img").width=300;
	document.getElementById("img").src="https://joeschmoe.io/api/v1/random"+name;
}
function restart(){
	document.getElementById("ab").value="";
	document.getElementById("img").src="img.gif";
}
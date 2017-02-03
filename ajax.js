console.info("ajax.js eingebunden");

$(document).ready(function() {
	var $liste_a = $("#anfragen").find("a");
	
	$liste_a
	.eq(0)
		.on("click", function(e) {
			e.preventDefault();
		});
});



/////////////////////////////////////////////////////////////////////////////
/*
window.onload = function() {
	var liste_a = document.getElementById("anfragen").getElementsByTagName("a");
	liste_a[0].onclick = function(e) {
		e.preventDefault();
		// ---- AJAX ---------------------------------------
		var xhr = new XMLHttpRequest();
		xhr.open("get","../php_info.php", true);
		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4 && xhr.status === 200) {
				var ausgabe = xhr.responseText.split("<body>")[1];
				ausgabe = ausgabe.split("</body>")[0];
				document.getElementById("antwort").innerHTML = ausgabe;
			}
		}
		xhr.send();
		// ----------------------------------------------
	}
}
*/

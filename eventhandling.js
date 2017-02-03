console.info("eventhandling.js eingebunden");
function zaehle() {
	// => HTML-Element an dem die Funktion ausgelöst/gefeuert wurde
	var el = this; 
	//Den String mit der Zahl im innerHTML auslesen und in number umwandeln
	var zahl = Number(this.innerHTML); // Number("0") //=> 0 
	//Wert um 1 erhöhen
	zahl = zahl +1;
	//Den neuen Wert wieder in den div schreiben
	this.innerHTML = zahl;
	
	//Alternativ in einer Zeile, automatische Umwandlung beim auslesen 
	//und direktes zurückschreiben des neuen Wertes der um 1 erhöht wurde:
	//this.innerHTML++;
} // end fn zaehle 

function zeige() {
	console.log(this);
	// --------- Hilfsvariablen sind nicht nötig dienen nur der Übersicht ----
	var geklickterLink = this;
	var linkId = this.id; // geklickterLink.id;
	var linkText = this.innerHTML; // geklickterLink.innerHTML;
	//----- Möglichkeit 1 mit split:
	//              ["link","01"]     [1] //=> "01"
	var zahlAusId = this.id.split("-")[1];
	
	//----- Möglichkeit 2 mit substring:
	//var zahlAusId = this.id.substring(this.id.indexOf("-")+1);
	
	//----- Möglichkeit 3 mit replace:
	//var zahlAusId = this.id.replace("link-","");	
	console.log(zahlAusId);
	document.getElementById("ausgabe").innerHTML = "Die id des geklickten links <b>"+this.id+"</b>.<br>	Die Zahl <b>"+this.id.split("-")[1]+"</b><br>Der Textknoten: <b>"+this.innerHTML+"</b><br>";
	
} // end fn zeige 

function setup() {
	//---------------------------Aufgabe 1 ---------------------------
	//----Handler div#hover mouseover binden 
	/*
	document.getElementById("zaehler1").onmouseover = zaehle;
	document.getElementById("zaehler2").onmouseover = zaehle;
	document.getElementById("zaehler3").onmouseover = zaehle;
	document.getElementById("zaehler4").onmouseover = zaehle;
	document.getElementById("zaehler5").onmouseover = zaehle;
	*/
	
	//----Handler mit Schleife binden (ab 3 Befehlswiederholungen eine Schleife)
	for(var i = 1; i < 6; i++ ) {
		document.getElementById("zaehler"+i).onmouseover = zaehle;	
	}
	/*
	//Wird das Element mehrfach aufgerufen lohnt sich die Hilfsvariable:
	var zaehler1 = document.getElementById("zaehler1");
	zaehler1.onmouseover = zaehle;
	zaehler1.style.backgroundColor = "skyblue";
	*/
	//---------------------------Aufgabe 2 ---------------------------
	document.getElementById("ausgabe").innerHTML = "";
	document.getElementById("link-01").onclick = zeige;
	document.getElementById("link-02").onclick = zeige;
	document.getElementById("link-03").onclick = zeige;
	document.getElementById("link-04").onclick = zeige;


}

//setup als Referenz, Sie wird nicht aufgerufen übergeben
//Der Browser ruft setup auf wenn die Seite geladen ist.
window.onload = setup;

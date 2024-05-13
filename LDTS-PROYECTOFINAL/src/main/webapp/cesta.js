/**
 * 
 */


// Validacion de fechas:
function validarFecha() {
	var fechaInput = document.getElementById("fecha").value;
	var fechaSeleccionada = new Date(fechaInput);
	var fechaActual = new Date();

	if (fechaSeleccionada < fechaActual) {
		alert("La fecha seleccionada no puede ser anterior a la fecha de hoy.");
		document.getElementById("fecha").value = ""; // Limpiar el campo de fecha
	}
}


// Validacion de la cantidad de numeros introducidos en el CVV
function limitarTresDigitos() {
	var cvvInput = document.getElementById("cvv");
	if (cvvInput.value.length > 3) {
		cvvInput.value = cvvInput.value.slice(0, 3); // Limitar a los primeros 3 dígitos
	}
}

/*
// Inicializamos el total en 0
let total = 0;
let impuestosDinero = 0;
let totalCompleto = 0;

let vivaElBetis = 0;

const totalDisplay = document.getElementById("total");
const impuestos = document.getElementById("totalImpuestos");
// Función para sumar la cantidad al total
function sumar(cantidad) {
	total += cantidad;
	totalDisplay.textContent = total + "€";
	impuestosDinero = total * 0.21;

	vivaElBetis++;

	totalCompleto = total + impuestosDinero;
	document.getElementById("totalImpuestos").innerHTML = impuestosDinero + "€";
	document.getElementById("totalCompleto").innerHTML = totalCompleto + "€";
	document.getElementById("vivaElBetis").innerHTML = vivaElBetis;


}



// Función para restar la cantidad al total
function restar(cantidad) {
	total -= cantidad

	if ((total) < 0) {
		total = 0
		impuestosDinero = total * 0.21;

		totalCompleto = total + impuestosDinero;
		document.getElementById("totalImpuestos").innerHTML = impuestosDinero + "€";
		document.getElementById("totalCompleto").innerHTML = totalCompleto + "€";
		document.getElementById("vivaElBetis").innerHTML = vivaElBetis;


		vivaElBetis--;

	}

	else {

		//if ((total -= cantidad) < 0) {


		vivaElBetis--;

		impuestosDinero = total * 0.21;

		totalCompleto = total + impuestosDinero;
		document.getElementById("totalImpuestos").innerHTML = impuestosDinero + "€";
		document.getElementById("totalCompleto").innerHTML = totalCompleto + "€";
		document.getElementById("vivaElBetis").innerHTML = vivaElBetis;


		//}
	}



	totalDisplay.textContent = total + "€";
}
*/



// Variables constantes 
const totalDisplay = document.getElementById("total");
const impuestos = document.getElementById("totalImpuestos");
const FashionFusionHQContadorDiv = document.getElementById("FashionFusionHQContadorDiv");
const MindfulMeditatorContadorDiv = document.getElementById("MindfulMeditatorContadorDiv");
const CulinaryCraftsmenContadorDiv = document.getElementById("CulinaryCraftsmenContadorDiv");
const ArtisanCraftersContadorDiv = document.getElementById("ArtisanCraftersContadorDiv");


// Variables de los contadores.
let total = 0;
let FashionFusionHQContador = 0;
let MindfulMeditatorContador = 0;
let CulinaryCraftsmenContador = 0;
let ArtisanCraftersContador = 0;

// Funciones de Suma
function FashionFusionHQSuma() {
	total += 89;
	
	totalDisplay.textContent = total;
	FashionFusionHQContador ++;
	FashionFusionHQContadorDiv.textContent = FashionFusionHQContador;
	
}


function MindfulMeditatorSuma() {
	total += 120;
	totalDisplay.textContent = total;

	MindfulMeditatorContador ++;
	MindfulMeditatorContadorDiv.textContent = MindfulMeditatorContador;

}

function CulinaryCraftsmenSuma() {
	total += 88;
	totalDisplay.textContent = total;
	CulinaryCraftsmenContador + 1;
	CulinaryCraftsmenContadorDiv.textContent = CulinaryCraftsmenContador;

}

function ArtisanCraftersSuma() {
	total += 75;
	totalDisplay.textContent = total;
	ArtisanCraftersContador ++;
	CulinaryCraftsmenContadorDiv.textContent = ArtisanCraftersContador;

}

// Funciones de Resta
function FashionFusionHQResta() {
	total -= 89;
	totalDisplay.textContent = total;
	FashionFusionHQContador--;
	FashionFusionHQContadorDiv.textContent = FashionFusionHQContador;


}


function MindfulMeditatorResta() {
	total -= 120;
	totalDisplay.textContent = total;
	MindfulMeditatorContador--;
	MindfulMeditatorContadorDiv.textContent = MindfulMeditatorContador;

}

function CulinaryCraftsmenResta() {
	total -= 88;
	totalDisplay.textContent = total;
	CulinaryCraftsmenContador--;
	CulinaryCraftsmenContadorDiv.textContent = CulinaryCraftsmenContador;

}

function ArtisanCraftersResta() {
	total -= 75;
	totalDisplay.textContent = total;
	ArtisanCraftersContador--;
	ArtisanCraftersContadorDiv.textContent = CulinaryCraftsmenContador;


}





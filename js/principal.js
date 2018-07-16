var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var peso = paciente.querySelector(".info-peso").textContent;

	var altura = paciente.querySelector(".info-altura").textContent;

	var info = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValido = validaAltura(altura);

	

	if (!pesoEhValido) {
		console.log("Peso Inválido");
		info.textContent= "Peso Inválido!"
		paciente.classList.add("paciente-invalido");
		pesoEhValido = false;
	}
	if(!alturaEhValido){
		console.log("Altura Inválida");
		info.textContent= "Altura Inválida!"
		paciente.classList.add("paciente-invalido");
		alturaEhValido = false;
	}
	
	if (pesoEhValido && alturaEhValido){

	var imc = calculaImc(peso,altura);
	info.textContent = imc;
	
	}
	
}
function calculaImc(peso,altura){
	var imc = 0;
	imc = peso / (altura * altura);

	return imc.toFixed(2);
}
function validaPeso(peso){
	if(peso > 0 && peso < 500){
		return true;
	}else{
		return false;
	}
}
function validaAltura(altura){
	if(altura > 0 && altura < 3.0){
		return true;
	}else{
		return false;
	}
}
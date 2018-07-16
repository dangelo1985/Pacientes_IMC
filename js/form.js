var botaoAdcionar = document.querySelector("#adicionar-paciente");
	
	botaoAdcionar.addEventListener("click",function(event){
	event.preventDefault();

	var form = document.querySelector("#formulario");
	var paciente = exibirDadosForm(form);
    
    
	
	var erros = pacienteValido(paciente);

	if(erros.length > 0){
		mostrarErros(erros);
		return;
	}

	//adicionando paciente a tabela
	adicionaPaciente(paciente);
	

	form.reset();
	var ul = document.querySelector("#mensagem-erro");
	ul.innerHTML = "";

});
function adicionaPaciente(paciente){
	var pacienteTr = montarTabela(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function exibirDadosForm(form){
 
 var paciente = {
 	nome: form.nome.value,
	peso: form.peso.value,
	altura: form.altura.value,
	gordura: form.gordura.value, 
	imc: calculaImc(form.peso.value, form.altura.value)
 }
	
 return paciente;
}

function montarTabela(paciente){

	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");


	pacienteTr.appendChild(montarTd(paciente.nome,"info-nome"));
	pacienteTr.appendChild(montarTd(paciente.peso,"info-peso"));
	pacienteTr.appendChild(montarTd(paciente.altura,"info-altura"));
	pacienteTr.appendChild(montarTd(paciente.gordura,"info-gordura"));
	pacienteTr.appendChild(montarTd(paciente.imc,"info-imc"));

	return pacienteTr;
}
function mostrarErros(erros){
	var ul = document.querySelector("#mensagem-erro");

	ul.innerHTML = "";
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});

}

function montarTd(dado , classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function pacienteValido(paciente){
	var erros = [];
	if(paciente.nome.length == 0) erros.push("o campo nome não pode sem branco!");
	if(!validaPeso(paciente.peso)) erros.push("Peso Inválido!");
	if(!validaAltura(paciente.altura)) erros.push("Altura Inválida!");
	if(paciente.gordura.length == 0) erros.push("O campo Gordura não pode ser em branco");

	return erros;
}

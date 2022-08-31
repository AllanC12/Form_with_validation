$(function(){

//PLUGIN MASK
maskFormulario();
function maskFormulario(){
	$('input[name=contato]').mask('(99)99999-9999')
}


$('form').submit(function(e){

	
	e.preventDefault();
	var nome = $('input[name=nome]').val();
	var email = $('input[name=email]').val();
	var telefone = $('input[name=contato]').val()

//EVENTOS DE VALIDACAO DO FORMULARIO

if(validarNome() == false){
	campoInvalido($('input[name=nome]'))
}else if(validarEmail() == false){
	campoInvalido($('input[name=email]'))
}else if(validarTelefone() == false){
	campoInvalido($('input[name=contato]'))
}else{
	alert('Formulário enviado com sucesso!!!')
}

//FUNCOES DE ESTILIZACAO DOS CAMPOS

campoInvalido();
function campoInvalido(el){
    el.css('border','3px solid red');
	el.val('CAMPO INVALIDO');
}

resetCampo();
function resetCampo(){
	$('input[type=text]').focus(function(){
	$(this).css('border','1px solid #ccc');
	$(this).val('');
	})
}

//VALIDACAO DOS CAMPOS

validarNome();
function validarNome(){
	var splitstr = nome.split(' ');
	var amount = nome.split(' ').length;

	if(amount >=2){
          for(var i = 0; i < amount; i++){
          	if(splitstr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){

          	}else{
          		return false
          	}
          }
	}else{
		return false
	}
}

validarEmail();
function validarEmail(){
	if(email.match(/^([A-Za-z0-9-_.]{1,})+@+([a-z.]{1,})$/)){

	}else{
		return false
	}
}

validarTelefone();
function validarTelefone(){
	if(telefone.match(/^(\([0-9]{2}\)[0-9]{5})+-+[0-9]{4}$/)){

	}else{
		return false
	}
}

 
})



//BOTAO DE VOLTAR AO TOPO DA PAGINA
voltarTopo();
function voltarTopo(){
	$('input[name=back]').click(function(){
		$('html,body').animate({
			scrollTop:0
		},1000)
	})
}

})

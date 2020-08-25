function validar() {
	
	if(nome.value.length == 0) {
		$("#myAlert").replaceWith("<div class='alert alert-warning alert-dismissible'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>Ops!</strong> Nós precisamos saber quem você é! </div>");
		$("#myAlert").css("display", "");
		$("#nome").focus();
		return;
	}
	
	if(email.value.length == 0) {
		$("#myAlert").replaceWith("<div class='alert alert-warning alert-dismissible'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>Ops!</strong> Identifique o seu e-mail! </div>");
		$("#myAlert").css("display", "");
		$("#email").focus();
		return;
	}
	
	window.location = 'file:///C:/Users/gabil/Desktop/MallocGames/obrigado.html';
	
}


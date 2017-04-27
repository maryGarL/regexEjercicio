var boton=document.getElementById("boton");
var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var dni=document.getElementById("dni");
var nacimiento=document.getElementById("nacimiento");
var celular=document.getElementById("celular");
var telefono=document.getElementById("telefono");
var comentario=document.getElementById("comentario");
var inputs=document.getElementsByClassName("inputs");

var elemento = document.querySelector(".formulario");
elemento.addEventListener("submit", function(event) {
  event.preventDefault();
     var validate = function(){
		if(this.value.trim().length == 0){
			this.value = "";
			this.nextElementSibling.innerText = "Este campo es obligatorio";
			this.nextElementSibling.style.display = "inline-block"
		}else{
			this.nextElementSibling = "";
			this.nextElementSibling.style.display = "none"
		}
	};

	for(var i = 0; i < inputs.length; i++){
		inputs[i] = validate;
	}
});

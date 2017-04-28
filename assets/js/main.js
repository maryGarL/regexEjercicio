var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var dni=document.getElementById("dni");
var nacimiento=document.getElementById("nacimiento");
var celular=document.getElementById("celular");
var telefono=document.getElementById("telefono");
var contrasena=document.getElementById("pass");
var recontrasena=document.getElementById("repass");
var comentario=document.getElementById("comentario");
var inputs=document.getElementsByClassName("inputs");
var mayuscula=/^[A-Z]{1}[a-z]{3,13}$/
var numeros=/^[0-9]$/
var nueve =/^[0-9]{9}$/
var ocho =/^[0-9]{8}$/
var telephone=/\(?([0-9]{2})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
function validate(input){
if(input.value.trim().length == 0){
 input.value = "";
 input.nextElementSibling.innerText = "Este campo es obligatorio";
 input.nextElementSibling.style.display = "inline-block";
}
else{
 input.nextElementSibling = "";
 input.nextElementSibling.style.display = "none"
}
return input;
};
function mayusculas(input) {
  if(input.value.trim().length == 0){
    input.value = "";
    input.nextElementSibling.innerText = "Este campo es obligatorio";
    input.nextElementSibling.style.display = "inline-block";
  }else if(mayuscula.test(input.value)== false){
     input.value = "";
     input.nextElementSibling.innerText = "Debe comenzar con mayusculas";
     input.nextElementSibling.style.display = "inline-block";
   }
   else{
    input.nextElementSibling = "";
    input.nextElementSibling.style.display = "none"
   }
   //return input;
   };

  function numero(input) {
    if(input.value.trim().length == 0){
      input.value = "";
      input.nextElementSibling.innerText = "Este campo es obligatorio";
      input.nextElementSibling.style.display = "inline-block";}
      else if(ocho.test(input.value)== false){
      input.value = "";
      input.nextElementSibling.innerText = "Debe ingresar solo 8 numeros ";
      input.nextElementSibling.style.display = "inline-block";
    }
    else{
      input.nextElementSibling = "";
      input.nextElementSibling.style.display = "none"
     }
  }
  function telef(input) {
    if(input.value.trim().length == 0){
      input.value = "";
      input.nextElementSibling.innerText = "Este campo es obligatorio";
      input.nextElementSibling.style.display = "inline-block";}
      else if(telephone.test(input.value)== false){
      input.value = "";
      input.nextElementSibling.innerText = "Debe ingresar solo numeros telefonicos con codigo ()";
      input.nextElementSibling.style.display = "inline-block";
    }
    else{
      input.nextElementSibling = "";
      input.nextElementSibling.style.display = "none"
     }
  }
  function celu(input) {
    if(input.value.trim().length == 0){
      input.value = "";
      input.nextElementSibling.innerText = "Este campo es obligatorio";
      input.nextElementSibling.style.display = "inline-block";}
      else if(nueve.test(input.value)== false){
      input.value = "";
      input.nextElementSibling.innerText = "Debe ingresar solo 9 numeros ";
      input.nextElementSibling.style.display = "inline-block";
    }
    else{
      input.nextElementSibling = "";
      input.nextElementSibling.style.display = "none"
     }
  }
  function validaContra(input1,input2) {
    if((input1.value.trim().length == 0)&&(input2.value.trim().length == 0)){
      input1.value = "";
      input1.nextElementSibling.innerText = "Este campo es obligatorio";
      input1.nextElementSibling.style.display = "inline-block";
      input2.nextElementSibling.innerText = "Este campo es obligatorio";
      input2.nextElementSibling.style.display = "inline-block";
    }
      else if (input2.value.trim().length == 0) {
      input2.value = "";
      input2.nextElementSibling.innerText = "Este campo es obligatorio para validar";
      input2.nextElementSibling.style.display = "inline-block";
    }
    else if (input1.value!==input2.value) {
      input2.value = "";
      input2.nextElementSibling.innerText = "Las contraseñas no coinciden";
      input2.nextElementSibling.style.display = "inline-block";
    }
    else{
      input.nextElementSibling = "";
      input.nextElementSibling.style.display = "none"
     }
  }

var elemento = document.querySelector(".formulario");
elemento.addEventListener("submit", function(event) {
  event.preventDefault();
	for(var i = 0; i < inputs.length; i++){
		validate(inputs[i]);
	}
  mayusculas(nombre);
  mayusculas(apellido);
  numero(dni);
  telef(telefono);
  celu(celular);
  validaContra(contrasena,recontrasena)
});


//Declarando variables:

var botonOpen = document.getElementById("btn-open");
var barraLateral = document.getElementById("pull-down");

botonOpen.addEventListener("click", dezplegarBarra);

function dezplegarBarra(){
    barraLateral.classList.toggle("barra-dezplegada")
    barraLateral.classList.toggle("pull-down")
}

//Validacion de campos

function Limpiar_Formulario() {
    document.getElementById("identificacion").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("contrasenia").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
}

function Validar_Formulario(){

    let inputIdentificacion = document.getElementById("identificacion").value
    let inputNombre = document.getElementById("nombre").value
    let inputFechaNacimiento = document.getElementById("fechaNacimiento").value
    let selectEstado = document.getElementById("estado").value

    if(inputIdentificacion.trim() == ""){
        
        document.getElementById("identificacion").value.classList.add("has-error")
        return false;
    }
    
    if(inputNombre.trim() == ""){
        alert("Porfavor, ingrese su nombre");
        inputNombre.focus();
        return false;
    }
    
    if(inputFechaNacimiento.trim() == ""){
        alert("Porfavor, ingrese su fecha de nacimiento");
        inputFechaNacimiento.focus();
        return false;
    }
    
    if(selectEstado.trim() == false){
        alert("Porfavor, ingrese el estado del usuario");
        selectEstado.focus();
        return false;
    }

    return Registrar_Usuario();

}
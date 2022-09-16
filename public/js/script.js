
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

    let inputIdentificacion = document.getElementById("identificacion").value.trim();
    if(inputIdentificacion == ""){
        alert("Porfavor, ingrese su identificación");
        document.getElementById("identificacion").focus();
        return false;
    }
    let inputNombre = document.getElementById("nombre").value.trim();
    if(inputNombre == ""){
        alert("Porfavor, ingrese su nombre");
        document.getElementById("nombre").focus();
        return false;
    }
    let inputFechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
    if(inputFechaNacimiento == ""){
        alert("Porfavor, ingrese su fecha de nacimiento");
        document.getElementById("fechaNacimiento").focus();
        return false;
    }
    let selectEstado = document.getElementById("estado").value.trim();
    if(selectEstado == false){
        alert("Porfavor, ingrese el estado del usuario");
        document.getElementById("estado").focus();
        return false;
    }

    return Registrar_Usuario();

}

function Enviar_Formulario(){
    if(Validar_Formulario() == true){
        Limpiar_Formulario()
    }else{
        return false;
    }
    
}
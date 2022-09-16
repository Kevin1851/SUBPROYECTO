Listar_Usuario()

    var myModal = new bootstrap.Modal(document.getElementById('MyModal'), {
        keyboard: false
    })

    function abrirModal(){
        myModal.show();
    }

    function Registrar_Usuario(){

        const datos = new URLSearchParams();
        datos.append('identificacion',document.getElementById('identificacion').value);
        datos.append('nombre',document.getElementById('nombre').value);
        datos.append('fechaNacimiento',document.getElementById('fechaNacimiento').value);
        datos.append('estado',document.getElementById('estado').value);
        datos.append('contrasenia',document.getElementById('contrasenia').value);
        datos.append('correo',document.getElementById('correo').value);
        datos.append('telefono',document.getElementById('telefono').value);
        datos.append('tipo',document.getElementById('tipo').value);
            
        fetch('/RegistrarUsuario',
        {
            method:'post',
            body:datos
        }).then(resp=>resp.json())
        .then(data=>{
            myModal.hide();
            Swal.fire({
            position: 'center',
            icon: 'success',
            title:data.mensaje,
            showConfirmButton: false,
            timer: 1500
            })
        })
        Listar_Usuario();
    }

    function EliminarUsuario(ident) {

    fetch(`/EliminarUsuario/${ident}`,
        {
            method:'get'
        }).then(resp=>resp.json())
        .then(data=>{
            Swal.fire({
            position: 'center',
            icon: 'success',
            title:data.mensaje,
            showConfirmButton: false,
            timer: 1500
            })
            Listar_Usuario();
        });

    }
    function Listar_Usuario(){
        fetch('/listarUsuario',
                 {method:'GET'}
        ).then(resp=>resp.json()
        ).then(listadoUsuario=>{

            let html='';

            for(var i=0; i<listadoUsuario.length; i++){
                
                    html+=`<tr><td>${listadoUsuario[i].PK_id_usuario}</td>`
                    html+=`<td>${listadoUsuario[i].identificacion}</td>`
                    html+=`<td>${listadoUsuario[i].nombreUsuario}</td>`
                    html+=`<td>${listadoUsuario[i].fechaNacimiento}</td>`
                    html+=`<td>${listadoUsuario[i].estadoUsuario}</td>`
                    html+=`<td>${listadoUsuario[i].contrasenia}</td>`
                    html+=`<td>${listadoUsuario[i].correo}</td>`
                    html+=`<td>${listadoUsuario[i].telefono}</td>`
                    html+=`<td>${listadoUsuario[i].tipoUsuario}</td>` 
                    html+=`<td> <a href='javascript:EliminarUsuario(${listadoUsuario[i].PK_id_usuario});' 
                        class='btn btn-danger'>Eliminar</a></td>`
                    html+=`</tr>`;
                }
                document.getElementById('tabla').innerHTML=html;
            })
    }
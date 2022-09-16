const express= require('express'); 

const bodyparser= require("body-parser"); //Se importa el módulo body-parser para recivir parametros 

const Servidor = express(); 
Servidor.use(express.static(__dirname+'/public'));//Se configura la carpeta publica 


Servidor.use(bodyparser.json());//Se configura para recibir parametros json 

Servidor.use(bodyparser.urlencoded({extended:false}));// Se configura para recibir parametros de formularios 

 Servidor.set('view engine','ejs');//Se configura el motor de plantillas ejs 

Servidor.set('views',__dirname+'/views');//Se configura la carpeta contenedora de las vistas 

 
Servidor.use(require('./routes/routeAdmin'));

Servidor.get('/',(peticion,respuesta)=>{
    respuesta.render('index');
});

  Servidor.listen(2000,()=>{ 

    console.log("El servidor se esta ejecutando en el puerto 2000"); 

}); 
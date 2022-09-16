const mysql= require ('mysql');

const conexion=mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:"",
        database:'shoptec'
    }
);

conexion.connect((err)=>{
    if(err){
        console.log("Error al realizar la conexión   con la base de datos"+err)
    }else{
        console.log("la comunicación con Mysql fue exitosa")
    }
});

module.exports=conexion;
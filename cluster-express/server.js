const express = require("express");
const cluster = require("cluster");
const os = require("os");//Obtener informacion del sistema operativo que este ejecutando la aplicacion de node

//Verifico cuantos nucleos tengo en el procesador de mi maquina
const coresNumber = os.cpus().length;
/*console.log("Numero de nucleos del computador: " , coresNumber);*/


const app = express();

const PORT = 8080;

//Modo Cluster-Multiples procesos

// if (cluster.isPrimary) {
//     //crear los subprocesos del cluster, basado en los nucleos disponibles.
//     for (let i = 0; i < coresNumber; i++) {
//         cluster.fork();
//     }
//     //Detectamos cuando un subproceso del cluster deje de funcionar
//     cluster.on( "exit" , ( worker ) => {
//         console.log(`El proceso ${ worker.process.pid } dejo de funcionar`);
//         cluster.fork();//Crea un subproceso que sustituye al proceso que dejo de funcionar
//     })
// } else {
    
//     app.listen( PORT , () => {
//     console.log(`Servidor corriendo en el puerto ${ PORT } en el proceso ${ process.pid }`);
//     });


//     app.get("/" , ( req , res ) =>{
//     res.send(`Corriendo en el proceso ${ process.pid }`);
//     //cluster.worker.kill(); Esto lo puse para simular que se rompia el servidor haciendo que el proceso se termine
//     })
// }

//Modo Fork- 1 proceso

app.listen( PORT , () => console.log(`Servidor corriendo en el puerto ${ PORT } en el process ${ process.pid }` ) );

app.get("/" , ( req , res ) => {
    for (let i = 0; i<1e8; i++) {};
    res.send(`Corriendo en el proceso ${process.pid }`);
});
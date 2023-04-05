const express = require("express");

const app = express();

const PORT = 8080;

//Modo Fork- 1 proceso

app.listen( PORT , () => console.log(`Servidor corriendo en el puerto ${ PORT } en el process ${ process.pid }` ) );

app.get("/" , ( req , res ) => {
    for (let i = 0; i<1e8; i++) {};
    res.send(`Corriendo en el proceso ${process.pid } modificado`);
});
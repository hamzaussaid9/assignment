const express = require('express');


const app = express();

app.get('/', (req,res)=> res.json('server tested'))

app.listen(1500,()=>{
    console.log("server has startd");
})


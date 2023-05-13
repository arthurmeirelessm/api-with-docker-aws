const express = require('express');
const server = express()

const port = '3000'

server.get('/c', (req, res) => {

    return res.json({
        "message":"Deu bom!",
        "status":"200"
     })
});

server.listen(port);
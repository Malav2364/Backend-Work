const express = require('express')
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Malav Patel is OP !')
})

app.listen(port, () => {
    console.log(`App Started on port ${port}`)
})
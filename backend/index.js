const express = require('express')
app = express()

app.get('/',(req,res) => {
    res.send('Hello kavin')
})

app.listen(3003,() => {
    console.log('Server is on port 3003');
    
})
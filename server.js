require('dotenv').config()

const express = require('express')
const app = express();
const PORT = process.env.PORT;


function sendhtml(res,num1,num2){
    res.send(`
    <html>
        <body>
            <h1>OKAYY</h1>
            <a href = http://localhost:3001/calc/${num1}/${num2}?operation=add>addition</a>

            <a href = http://localhost:3001/calc/${num1}/${num2}?operation=multiply>multiply</a>

            <a href = http://localhost:3001/calc/${num1}/${num2}?operation=divide>divide</a>
        </body>
    </html>    
    `)    
}



app.get('/startcalc/:num1/:num2', (req,res) => {
    const one = Number(req.params.num1)
    const two = Number(req.params.num2)
    sendhtml(res,one,two)
})


app.get('/calc/:num1/:num2', (req, res) => {
    const first = Number(req.params.num1)
    const second = Number(req.params.num2)
    console.log('waht about now ' + (typeof first))
    if (req.query.operation === 'add'){
        const sum = first + second 
        res.send('the sum is ' + sum)
    } else if (req.query.operation === 'multiply'){
        const product = first * second
        res.send('the product is ' + product)
    } else if (req.query.operation === 'divide') {
        const quotient = first / second
        res.send('the quotient is ' + quotient)
    }
    else {
        res.send('no operation')
    }
})




app.listen(PORT, () => {
    console.log('Express is listening on port: ', PORT)
})


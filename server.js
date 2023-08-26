// const express = require('express');

// const app = express();
// const PORT = 3000;

//data
const answer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


const express = require('express')

const app = express()
const PORT = 3000

//Routes

//Greeting
app.get('/greeting', (req, res) => {
    res.send('Hello, Stranger!')
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello, ${name}!`)
    // res.send(`Hello, ` + req.params.name + `!`)
})


//Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage

    res.send(`Your tip is: $ ${total * tipPercentage / 100}`)

    // another way
    // res.send(`Your tip is: ` + req.params.total * req.params.tipPercentage / 100)
})

//Basic 8 ball
app.get('/magic/:question', (req, res) => {
    const question = req.params.question
    res.send(`${question}? <h1>${answer[Math.floor(Math.random() * (answer.length - 1))]}</h1>`)
})

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
})
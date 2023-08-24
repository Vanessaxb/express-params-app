const express = require('express');

const app = express();
const PORT = 3000;

//data
const answer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


//2. & 3. routes + params
app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ` +  req.params.name)
})

//calculate tip
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send('Your tip will be: ' + (req.params.total * (req.params.tipPercentage/100)))
}
)

//Magic 8 ball
app. get('/magic/:question/:answer', (req, res) => {
    res.send(req.params.question + '?' + `<h1>` + answer[req.params.answer] + `</h1>` )
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
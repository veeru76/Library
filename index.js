const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
console.log('veeru')

const post = [
    {
    user : 'veeruu',
    title : 'node'
  },
  {
      user : 'sai',
      title : 'full'
  }
];


app.get('/posts', (req, res) => {
    res.send('<h1>welcome<h1>')
})

app.post('/login', (req, res) => {
  
})



app.listen(3000);
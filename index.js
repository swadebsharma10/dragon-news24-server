const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const categories = require('./data/categories.json')

app.get('/', (req, res) => {
  res.send('Dragon News is Running')
})

app.get('/news-categories', (req,res)=>{
    res.send(categories)
})

app.listen(port, () => {
  console.log(`Dragon News is Running on port ${port}`)
})
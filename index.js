const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const categories = require('./data/categories.json');

const news = require('./data/news.json')

app.get('/', (req, res) => {
  res.send('Dragon News is Running')
})

app.get('/news-categories', (req,res)=>{
    res.send(categories)
})

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    if(id === '08'){
      res.send(news)
    }
    else{
      const categoryNews = news.filter(news => news.category_id === id);
      res.send(categoryNews)
    }
  
})

// news related api
app.get('/news', (req,res)=>{
  res.send(news)
})

app.get('/news/:id', (req,res)=>{
  const id = req.params.id;
  const selectedNews = news.find(news => news._id === id);
  res.send(selectedNews)
})

app.listen(port, () => {
  console.log(`Dragon News is Running on port ${port}`)
})
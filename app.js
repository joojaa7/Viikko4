'use strict';
import express from 'express';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/v1/cats', (req, res) => {
  const cat = {
    cat_id : 1,
    name : 'Yksi',
    birthdate: '2002-02-02',
    weight: 5,
    owner: 2,
    image: 'https://loremflickr.com/320/240/cat',
  };
  res.json(cat);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

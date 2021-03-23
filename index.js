const express = require('express'),
  morgan = require('morgan');
const app = express();

const bodyParser = require('body-parser'),
  methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.use(morgan('common'));

let movies = [
  {
    title: 'Platoon',
    director: 'Oliver Stone'
  },
  {
    title: 'The Prestige',
    director: 'Christopher Nolan'
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino'
  },
  {
    title: 'Lord of the Rings',
    director: 'Peter Jackson'
  },
  {
    title: 'Alien',
    director: 'Ridley Scott'
  },
  {
    title: 'Fight Club',
    director: 'David Fincher'
  },
  {
    title: 'Se7en',
    director: 'David Fincher'
  },
  {
    title: 'The Usual Suspects',
    director: 'Bryan Singer'
  },
  {
    title: 'The Departed',
    director: 'Martin Scorsese'
  },
  {
    title: 'The Shining',
    director: 'Stanley Kubrick'
  }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my movie club!');
});

app.get('/documentation', (req, res) => {                  
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
  res.json(movies);
});


// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
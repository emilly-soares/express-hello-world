const express = require('express');
const router = express.Router();

// Rota inicial
router.get('/', (req, res) => {
   res.type('html').send(html);
});

// Rota /req
router.get('/req', (req, res) => {
   console.log('Just got a request!');
   res.send('Yo!');
});

// Desafio 1: Rota /meunome
router.get('/meunome', (req, res) => {
   const meuNome = 'Meu nome é Emilly Soares Santos';
   res.send(meuNome);
});

// Desafio 2: Rota /tico
router.get('/tico', (req, res) => {
   res.send('teco');
});

// Desafio 3: Rota /pokemons
router.get('/pokemons', (req, res) => {
   const pokemons = [
      { nome: 'Pikachu', numero: 1 },
      { nome: 'Butterfree', numero: 2 },
      { nome: 'Pidgeot', numero: 3 },
      { nome: 'Bulbasaur', numero: 4 },
      { nome: 'Charizard', numero: 5 },
      { nome: 'Squirtle', numero: 6 },
      { nome: 'Kingler', numero: 7 },
      { nome: 'Primeape', numero: 8 },
      { nome: 'Muk', numero: 9 },
      { nome: 'Tauros', numero: 10 },
   ];
   res.json(pokemons);
});


module.exports = router;

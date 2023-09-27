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

module.exports = router;

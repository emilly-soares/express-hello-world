const request = require('supertest');
const { app } = require('../app');

describe('Test Endpoints', () => {

    it('should return the author name from /meunome', async () => {
      const response = await request(app).get('/meunome');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Meu nome é Emilly Soares Santos');
    });
  
    it('should return a list of pokemons from /pokemons', async () => {
      const response = await request(app).get('/pokemons');
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(10); 
    });
  
    it('should return a list of series from /series', async () => {
      const response = await request(app).post('/series');
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(3); 
    });
  });
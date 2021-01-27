const { syncAndSeed } = require('../db');
const { expect } = require('chai');
const app = require('supertest')(require('../app'));
describe('Routes', ()=> {
  beforeEach(()=> syncAndSeed());
  describe('GET /', ()=> {
    it('shows documentation for the api', async()=> {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
    });
  });
  describe('GET /foos', ()=> {
    it('returns bar', async()=> {
      const response = await app.get('/foo');
      expect(response.status).to.equal(200);
      expect(response.text).to.equal('bar');
    });
  });
  describe('GET /api/users', ()=> {
    it('returns users', async()=> {
      const response = await app.get('/api/users');
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(2);
    });
  });
});

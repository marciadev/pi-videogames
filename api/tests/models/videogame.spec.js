const { Videogame, conn } = require('../../src/db.js');
const { expect, assert } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      // it('should work when its a valid name', () => {
      //   Recipe.create({ name: 'Super Mario Bros' });
      // });
      // it('should be data type string', ()=> {
      //     assert.typeOf(name, 'string')
      // });
    });
    describe('description', () => {
      it('should throw an error if description is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a description')))
          .catch(() => done());
      });
    //   it('should be data type text', ()=> {
    //     assert.typeOf(description, 'text')
    // });
    })
  });
});

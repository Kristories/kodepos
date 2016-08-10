const kodepos = require('.');
const assert  = require('assert');
const _       = require('underscore');

describe('kodepos', function() {

  describe('all()', function() {
    it('should display all the zip codes without error', function() {
      assert.equal(_.isObject(kodepos.all()), true);
    });
  });

  describe('get(10330)', function() {
    it('should display "Cikini"', function() {
      assert.equal(kodepos.get(10330), 'Cikini');
    });
  });

  describe('search(\'menteng\')', function() {
    it('should display "{"10310":"Menteng"}"', function() {
      assert.equal(JSON.stringify(kodepos.search('menteng')), JSON.stringify({ '10310': 'Menteng' }));
    });
  });

});

const expect = require('chai').expect;

describe('regex', () => {
  it('should equate two identical strings', () => {
    expect(/cat/.test('cat')).to.be.true;
  });

  it('should equate strings when an extra character is optional', () => {
    expect(/caa?t/.test('cat')).to.be.true;
  });

  it('should equate strings when a character set contains a match', () => {
    expect(/[Cc]at/.test('cat')).to.be.true;
    expect(/c[ a]t/.test('cat')).to.be.true;
  })

  it('should equate strings when given a range within a character set', () => {
    expect(/c[a-z]t/.test('cat')).to.be.true;
    expect(/[A-Za-z]at/.test('cat')).to.be.true;
  })

});

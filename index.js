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

  it('should equate strings when backslash-d is used to match numerals', () => {
    expect(/\d/.test('6')).to.be.true;
    expect(/\d/.test(6)).to.be.true;
    expect(/\d\d/.test('23')).to.be.true;
    expect(/\d\d\d/.test('12')).to.be.false;
  })
});

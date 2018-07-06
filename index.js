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
  });

  it('should equate string when backslash-w is used to match any word characters', () => {
    expect(/\w\w/.test('w4')).to.be.true;
    expect(/\w\w\w/.test('11d')).to.be.true;
  });

  it('should equate string when backslash-s is used to match whitespace characters', () => {
    expect(/\s\s/.test('  ')).to.be.true;
    expect(/\s\s\s/.test('    ')).to.be.true;
  });

  it('should equate string when a . is used to match any character', () => {
    expect(/........../.test('twice born')).to.be.true;
    expect(/......./.test('animate')).to.be.true;
  });

  it('should equate string when a + is used to match at least one additional character', () => {
    expect(/race\w+/.test('racecar')).to.be.true;
    expect(/racec+/.test('racecar')).to.be.true;
    expect(/race\w+/.test('race')).to.be.false;
  });

  it('should equate string when a * is used to match zero or more of any character', () => {
    expect(/race*/.test('racecar')).to.be.true;
    expect(/race*/.test('race')).to.be.true;
  });

  it('should equate string when curly braces are used to match a specific number of characters', () => {
    expect(/\d{3}-\d{3}-\d{4}/.test('970-555-3137')).to.be.true;
    expect(/\d{3}-\d{3}-\d{4}/.test('970-555-313')).to.be.false;
    expect(/\d{3}-\d{2}-\d{4}/.test('970-555-3137')).to.be.false;
    expect(/\w{4}/.test('Fred')).to.be.true;
  });


});

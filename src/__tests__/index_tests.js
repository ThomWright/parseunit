import parse from '../index.js';

describe('parse', () => {
  it('should handle integers', () => {
    const {val, unit} = parse('12px');
    expect(val, 'woop').to.equal(12);
    expect(unit).to.equal('px');
  });

  it('should handle floats', () => {
    const {val, unit} = parse('12.5%');
    expect(val).to.equal(12.5);
    expect(unit).to.equal('%');
  });

  it('should handle negative numbers', () => {
    const {val, unit} = parse('-1rem');
    expect(val).to.equal(-1);
    expect(unit).to.equal('rem');
  });

  it('should handle a space between number and unit', () => {
    const {val, unit} = parse('14 px');
    expect(val).to.equal(14);
    expect(unit).to.equal('px');
  });

  it('should handle unitless strings', () => {
    const {val, unit} = parse('13');
    expect(val).to.equal(13);
    expect(unit).to.equal('');
  });
});

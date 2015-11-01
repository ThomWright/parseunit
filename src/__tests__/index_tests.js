import parseUnit, {parseUnitObj} from '../index.js';

describe('parseUnit', () => {
  it('should handle integers', () => {
    const [val, unit] = parseUnit('12px');
    expect(val).to.equal(12);
    expect(unit).to.equal('px');
  });

  it('should handle floats', () => {
    const [val, unit] = parseUnit('12.5%');
    expect(val).to.equal(12.5);
    expect(unit).to.equal('%');
  });

  it('should handle negative numbers', () => {
    const [val, unit] = parseUnit('-1rem');
    expect(val).to.equal(-1);
    expect(unit).to.equal('rem');
  });

  it('should handle a space between number and unit', () => {
    const [val, unit] = parseUnit('14 px');
    expect(val).to.equal(14);
    expect(unit).to.equal('px');
  });

  it('should handle unitless strings', () => {
    const [val, unit] = parseUnit('13');
    expect(val).to.equal(13);
    expect(unit).to.equal('');
  });

  it('should handle exponential notation', () => {
    const [val, unit] = parseUnit('12e+6cm');
    expect(val).to.equal(12000000);
    expect(unit).to.equal('cm');
  });

  it('should handle exponential notation for decimals < 0', () => {
    const [val, unit] = parseUnit('2.1e-9cm');
    expect(val).to.equal(0.0000000021);
    expect(unit).to.equal('cm');
  });

  it('should handle invalid input', () => {
    const [val, unit] = parseUnit('-d');
    expect(val).to.satisfy(isNaN);
    expect(unit).to.equal('');
  });
});

describe('parseUnitObj', () => {
  it('should return an object instead of an array', () => {
    const {val, unit} = parseUnitObj('12px');
    expect(val).to.equal(12);
    expect(unit).to.equal('px');
  });
});

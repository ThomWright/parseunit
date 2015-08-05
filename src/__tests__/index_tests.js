import parseUnit, {parseUnitObj} from '../index.js';

describe('parseUnit', () => {
  it('should handle integers', () => {
    const [val, unit] = parseUnit('12px');
    expect(val, 'woop').to.equal(12);
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
});

describe('parseUnitObj', () => {
  it('should handle integers', () => {
    const {val, unit} = parseUnitObj('12px');
    expect(val, 'woop').to.equal(12);
    expect(unit).to.equal('px');
  });

  it('should handle floats', () => {
    const {val, unit} = parseUnitObj('12.5%');
    expect(val).to.equal(12.5);
    expect(unit).to.equal('%');
  });

  it('should handle negative numbers', () => {
    const {val, unit} = parseUnitObj('-1rem');
    expect(val).to.equal(-1);
    expect(unit).to.equal('rem');
  });

  it('should handle a space between number and unit', () => {
    const {val, unit} = parseUnitObj('14 px');
    expect(val).to.equal(14);
    expect(unit).to.equal('px');
  });

  it('should handle unitless strings', () => {
    const {val, unit} = parseUnitObj('13');
    expect(val).to.equal(13);
    expect(unit).to.equal('');
  });
});

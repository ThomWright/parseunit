// from https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly
const NUMBER_REGEX = /-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/;

export default function parseUnit(str) {
  // parse the number at the start of the string (this could return it in exponential notation)
  const val = parseFloat(str);

  // this is the actual number string,
  // might not be the same length as val if val is in exponential notation
  const numberStrings = str.match(NUMBER_REGEX) || [];

  // get everything after this number
  const unit = numberStrings.length > 0
    ? str.substr(numberStrings[0].length).trim()
    : '';

  return [val, unit];
}

export function parseUnitObj(str) {
  const [val, unit] = parseUnit(str);
  return {val, unit};
}

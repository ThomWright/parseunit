// from https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly
const NUMBER_REGEX = /-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/;

export default function parseUnit(str) {
  const
    // parse the number at the start of the string (this could return it in exponential notation)
    val = parseFloat(str),

    // this is the actual number string,
    // might not be the same length as val if val is in exponential notation
    numberString = str.match(NUMBER_REGEX)[0],

    // get everything after this number
    unit = str.substr(numberString.length).trim();

  return [val, unit];
}

export function parseUnitObj(str) {
  const [val, unit] = parseUnit(str);
  return {val, unit};
}

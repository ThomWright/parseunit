
export default function parseUnit(str) {
  const
    val = parseFloat(str), // parse the number at the start of the string
    unit = str.substr(val.toString().length).trim(); // get everything after this number

  return [val, unit];
}

export function parseUnitObj(str) {
  const [val, unit] = parseUnit(str);
  return {val, unit};
}

import parse from 'parse-unit';

export default function parseUnit(str) {
  const parsed = parse(str);
  return {
    val: parsed[0],
    unit: parsed[1]
  };
}

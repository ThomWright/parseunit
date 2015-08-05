# parseunit
[![Travis](https://img.shields.io/travis/ThomWright/parseunit.svg?style=flat-square)](https://travis-ci.org/ThomWright/parseunit)
[![npm](https://img.shields.io/npm/v/parseunit.svg?style=flat-square)](https://www.npmjs.com/package/parseunit)
[![David](https://img.shields.io/david/ThomWright/parseunit.svg?style=flat-square)](https://david-dm.org/ThomWright/parseunit)
[![David](https://img.shields.io/david/dev/ThomWright/parseunit.svg?style=flat-square)](https://david-dm.org/ThomWright/parseunit#info=devDependencies)

Parse strings with a number and unit.

## API

### ES5
```javascript
var parse = require('parseunit');
var parsed = parse('12px');
console.log(parsed[0], parsed[1]); // 12 'px'

// or parse into an object for better readability
var parseObj = parse.parseObj;
var parsed = parseObj('12px');
console.log(parsed.val, parsed.unit); // 12 'px'
```

### ES6
```javascript
import parseUnit, {parseUnitObj} from 'parseunit';

const [val, unit] = parseUnit('12px');
// or
const {val, unit} = parseUnitObj('12px');

console.log(val, unit); // 12 'px'
```

### `parseUnit`

*Default export*

**Params**
- **str** `string`

**Returns**
- **[val, unit]** `[number, string]`

### `parseUnitObj`

**Params**
- **str** `string`

**Returns**
- **{val, unit}** `{number, string}`

## Alternatives

[parse-unit](https://www.npmjs.com/package/parse-unit)

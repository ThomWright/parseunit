# parseunit
[![Travis](https://img.shields.io/travis/ThomWright/parseunit.svg?style=flat-square)](https://travis-ci.org/ThomWright/parseunit)
[![npm](https://img.shields.io/npm/v/parseunit.svg?style=flat-square)](https://www.npmjs.com/package/parseunit)
[![David](https://img.shields.io/david/ThomWright/parseunit.svg?style=flat-square)](https://david-dm.org/ThomWright/parseunit)
[![David](https://img.shields.io/david/dev/ThomWright/parseunit.svg?style=flat-square)](https://david-dm.org/ThomWright/parseunit#info=devDependencies)

Parse strings with a number and unit.

## API

```javascript
import parseunit from 'parseunit';

const {val, unit} = parseunit('12px');
console.log(val, unit); // 12 'px'
```

**Params**
- **str** `string`

**Returns**
- **{val, unit}** `{number, string}`

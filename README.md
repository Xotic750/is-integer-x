<a
  href="https://travis-ci.org/Xotic750/is-integer-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-integer-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-integer-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-integer-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-integer-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-integer-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-integer-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-integer-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-integer-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-integer-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-integer-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-integer-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_is-integer-x"></a>

## is-integer-x

Determine whether the passed value is an integer.

<a name="exp_module_is-integer-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏

This method determines whether the passed value is an integer.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - A Boolean indicating whether or not the given value is an integer.

| Param | Type            | Description                                  |
| ----- | --------------- | -------------------------------------------- |
| value | <code>\*</code> | The value to be tested for being an integer. |

**Example**

```js
import isInteger from 'is-integer-x';

console.log(isInteger(0)); // true
console.log(isInteger(1)); // true
console.log(isInteger(-100000)); // true

console.log(isInteger(0.1)); // false
console.log(isInteger(Math.PI)); // false

console.log(isInteger(NaN)); // false
console.log(isInteger(Infinity)); // false
console.log(isInteger(-Infinity)); // false
console.log(isInteger('10')); // false
console.log(isInteger(true)); // false
console.log(isInteger(false)); // false
console.log(isInteger([1])); // false
```

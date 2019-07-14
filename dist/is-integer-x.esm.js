import numberIsFinite from 'is-finite-x';
import toInteger from 'to-integer-x';
/**
 * This method determines whether the passed value is an integer.
 *
 * @param {*} value - The value to be tested for being an integer.
 * @returns {boolean} A Boolean indicating whether or not the given value is an integer.
 */

export default function isInteger(value) {
  return numberIsFinite(value) && toInteger(value) === value;
}

//# sourceMappingURL=is-integer-x.esm.js.map
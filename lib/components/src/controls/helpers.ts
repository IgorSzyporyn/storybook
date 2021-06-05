/**
 * Adds `control` prefix to make ID attribute more specific.
 * Removes spaces because spaces are not allowed in ID attributes
 * @link http://xahlee.info/js/html_allowed_chars_in_attribute.html
 * @example getControlId('my prop name') -> 'control-my-prop-name'
 */
export const getControlId = (value: string) => `control-${value.replace(/\s+/g, '-')}`;

/**
 * Count the decimals digits of a number
 * @param number number to count decimals of
 * @returns number of decimals
 */
export const countDecimalDigits = (number: number) => {
  const digitArray = number.toString().split('.').pop().split('');
  const notDecimalDigit = number.toString().split('').lastIndexOf('.');

  return notDecimalDigit < 0 ? 0 : digitArray.length;
};

/**
 * Count the whole digits number of any number
 * @param number number to count wholde digits of
 * @returns number of whole digits
 */
export const countWholeDigits = (number: number) => {
  const wholeArray = number.toString().split('.')[0].split('');

  return wholeArray.length;
};

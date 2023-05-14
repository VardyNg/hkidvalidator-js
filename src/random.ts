import {
  calculateChecksum
} from './util';

/**
 * generate random HKID
 * @param config - config object
 * @param config.includeBrackets - whether to include brackets
 * @returns string of random HKID
 */
export function random(config: any): string {
  // generate random HKID
  // decide how many leading characters to generate
  const leadingLettersLength = Math.random() > 0.5 ? 1 : 2;

  // generate leading characters
  let leadingLetters = '';
  for (let i = 0; i < leadingLettersLength; i++) {
    leadingLetters += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  // generate numbers
  let numbers = '';
  for (let i = 0; i < 7 - length; i++) {
    numbers += Math.floor(Math.random() * 10);
  }
  // generate checksum
  const checksum = calculateChecksum(leadingLetters, numbers)

  const remainder = checksum % 11;
  let checkDigit: string;
  if (remainder === 10) {
    checkDigit = 'A';
  } else {
    checkDigit = remainder.toString();
  }
  
  // return HKID with no brackets if config.includeBrackets is explicitly set to false
  if (config.hasOwnProperty('includeBrackets' && !config.includeBrackets)) {
    return `${leadingLetters}${numbers}${checkDigit}`;
  }
  // return HKID with brackets by default
  return `${leadingLetters}${numbers}(${checkDigit})`;
}
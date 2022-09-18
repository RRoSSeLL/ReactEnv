/**
 * Function that takes an Hex string for a CSS colro and returns a new string that is RGB formated.
 * @param hexString! string
 * @returns string
 */

export const hexToRGB = (hexString: string): string => {
  const hexValue = (hexString.indexOf('#') === 0) ? hexString.substring(1) : hexString;
  let rgbString = 'Invalid String';

  if (([3, 4, 6, 8].includes(hexValue.length)) && checkHexValue(hexValue)) {
    let r = 0, g = 0, b = 0, a = -1;
    const type = `rgb${([4, 8].includes(hexValue.length)) ? 'a' : ''}`;

    switch (hexValue.length) {
      case 4:
        a = +(parseInt(hexValue[3] + hexValue[3], 16) / 255).toFixed(3);
      case 3:
        r = parseInt(hexValue[0].repeat(2), 16);
        g = parseInt(hexValue[1].repeat(2), 16);
        b = parseInt(hexValue[2].repeat(2), 16);
        break;
      case 8:
        a = +(parseInt(hexValue.substring(6), 16) / 255).toFixed(3);
      case 6:
        r = parseInt(hexValue.substring(0, 2), 16);
        g = parseInt(hexValue.substring(2, 4), 16);
        b = parseInt(hexValue.substring(4, 6), 16);
    }
    rgbString = `${type}(${r}, ${g}, ${b}${(a > -1) ? (', ' + a) : ''})`;
  }

  return rgbString;
};

/**
 * Function that checks for a valid CSS Hex string
 * @param hexVaule string!
 * @returns boolean
 */

export const checkHexValue = (hexVaule: string): boolean => !(/(?:(?![\da-fA-F]).)+/g.test(hexVaule));
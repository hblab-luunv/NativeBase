/**
 * Base Colors
 *
 * Text Colors
 * - Suffix 'Text'
 *
 * Others
 */

const colors = {
  // BaseColors
  primary: '#69CA6D',
  secondary: '#273047',
  danger: '#E41F00',
  warning: '#FFA813',
  white: '#FFF',

  // TextColors
  primaryText: '#69CA6D',
  whiteText: '#FFFFFF',
  grayText: '#949494',

  // Others
  borderGray: '#BEBEBE',
  bgGray: '#F2F2F2',
  line: '#E8E8E8',
};

export const hexToRGBA = (hexCode: string, opacity: number) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex += hex;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

export default colors;

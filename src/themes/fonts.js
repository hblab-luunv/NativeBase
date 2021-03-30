import {scaleFont} from './mixins';

const type = {};

const size = {
  big: scaleFont(22),
  regular: scaleFont(18),
  medium: scaleFont(16),
  small: scaleFont(14),
  tiny: scaleFont(10),
};

const style = {
  h1: {
    fontWeight: 'bold',
    fontSize: scaleFont(32),
  },
  h2: {
    fontWeight: 'bold',
    fontSize: scaleFont(30),
  },
  h3: {
    fontWeight: 'bold',
    fontSize: scaleFont(26),
  },
  h4: {
    fontWeight: 'bold',
    fontSize: scaleFont(22),
  },
  h5: {
    fontWeight: '600',
    fontSize: scaleFont(18),
  },
  s1: {
    fontWeight: '600',
    fontSize: scaleFont(16),
  },
  s2: {
    fontWeight: '600',
    fontSize: scaleFont(14),
  },
  p1: {
    fontWeight: 'normal',
    fontSize: scaleFont(16),
  },
  p2: {
    fontWeight: 'normal',
    fontSize: scaleFont(14),
  },
  p3: {
    fontWeight: 'normal',
    fontSize: scaleFont(13),
  },
  c1: {
    fontWeight: 'normal',
    fontSize: scaleFont(12),
  },
  c2: {
    fontWeight: '500',
    fontSize: scaleFont(12),
  },
  label: {
    fontWeight: 'bold',
    fontSize: scaleFont(12),
  },
  tinyText: {
    fontWeight: '500',
    fontSize: scaleFont(10),
  },
  button1: {
    fontWeight: 'bold',
    fontSize: scaleFont(18),
  },
  button2: {
    fontWeight: 'bold',
    fontSize: scaleFont(16),
  },
  button3: {
    fontWeight: 'bold',
    fontSize: scaleFont(14),
  },
  // old style
  bigBold: {
    fontWeight: 'bold',
    fontSize: size.big,
  },
  bigNomal: {
    fontSize: size.big,
  },
  regularBold: {
    fontWeight: 'bold',
    fontSize: size.regular,
  },
};

export default {
  type,
  size,
  style,
};

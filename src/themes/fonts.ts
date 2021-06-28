import {scaleFont} from './mixins';

const type = {};

const size = {
  big: scaleFont(22),
  regular: scaleFont(16),
  medium: scaleFont(14),
  small: scaleFont(12),
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
};

export default {
  type,
  size,
  style,
};

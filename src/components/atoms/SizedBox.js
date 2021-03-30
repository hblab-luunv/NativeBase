import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: (width, height) => ({
    width,
    height,
  }),
});

const SizedBox = ({width, height}) => (
  <View style={styles.container(width, height)} />
);

export default SizedBox;

SizedBox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

SizedBox.defaultProps = {
  width: 0,
  height: 0,
};

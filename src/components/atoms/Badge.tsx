import { number } from 'prop-types';
import React, { memo } from 'react';
import { FunctionComponent } from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Text, View } from 'react-native';
import { colors, fonts, metrics } from '../../themes';
import { scaleSize } from '../../themes/mixins';

interface BadgeProps {
  number: number;
  badgeStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Badge: React.FC<BadgeProps> = ({
  badgeStyle,
  textStyle,
  number,
  ...props
}) => {
  if(number === 0) return null
  return (
    <View style={StyleSheet.flatten([styles.badge, badgeStyle])}>
      <Text style={StyleSheet.flatten([styles.label, number > 9 ? styles.twoNumber : styles.oneNumber, textStyle])}>
        {number > 99 ? 99 : number}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    width: scaleSize(24),
    height: scaleSize(24),
    alignSelf: 'flex-start',
    borderRadius: scaleSize(24)/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.danger,
  },
  oneNumber:{
    fontSize: 14,
    fontWeight: 'bold'
  },
  twoNumber:{
    fontSize: 12,
    fontWeight: 'bold'
  },
  label: {
    color: colors.whiteText,
  },
});

export default memo(Badge);

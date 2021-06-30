import React, {memo} from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {View} from 'react-native';
import {images, metrics} from '../../themes';
import {scaleSize} from '../../themes/mixins';
import {Icon} from '../atoms';
import BadgeWithIcon from './BadgeWithIcon';

interface HeaderProps {
  onPressNotify?: () => void;
  onPressSetting?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  numberNotify: number;
  notifyIconSize?: number;
  settingIconSize?: number;
}

const Header: React.FC<HeaderProps> = ({
  onPressNotify,
  onPressSetting,
  containerStyle,
  numberNotify,
  notifyIconSize = scaleSize(25),
  settingIconSize = scaleSize(24),
}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <View style={styles.logo}>
        <Image source={images.imgLogo} />
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={onPressNotify}>
          <BadgeWithIcon
            number={numberNotify}
            icon={images.icNotify}
            size={notifyIconSize}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressSetting}>
          <Icon
            source={images.icSetting}
            style={StyleSheet.flatten([
              styles.iconRight,
              {with: settingIconSize, height: settingIconSize},
            ])}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    paddingLeft: metrics.space.s16,
    width: '50%',
    alignItems: 'flex-start',
  },
  right: {
    paddingRight: metrics.space.s16,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: '50%',
  },
  iconRight: {
    marginLeft: metrics.space.s20,
  },
});

export default memo(Header);

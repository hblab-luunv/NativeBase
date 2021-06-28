import {Dimensions, Platform} from 'react-native';
import {scaleSize} from '../themes/mixins';

const {width, height} = Dimensions.get('window');
export const IS_IPHONE_X = height === 812 || height === 896;

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  unsafeBottomHeight: Platform.OS === 'ios' ? (IS_IPHONE_X ? 34 : 0) : 0,
  navBarHeight: Platform.OS === 'ios' ? 50 : 56,
  tabBarHeight: 56,
  smallMargin: scaleSize(8),
  baseMargin: scaleSize(16),
  smallRadius: scaleSize(3),
  baseRadius: scaleSize(6),
};

export default metrics;

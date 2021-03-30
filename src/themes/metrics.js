import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {scaleSize} from './mixins';

const {width, height} = Dimensions.get('window');
export const IS_IPHONE_X = height === 812 || height === 896;

const getBottomHeight = () => {
  if (Platform.OS === 'ios') {
    if (IS_IPHONE_X) {
      return 34;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusBarHeight: getStatusBarHeight(),
  unsafeBottomHeight: getBottomHeight(),
  navBarHeight: Platform.OS === 'ios' ? 50 : 56,
  tabBarHeight: 56,
  spacing: {
    s5: scaleSize(5),
    s10: scaleSize(10),
    s15: scaleSize(15),
    s20: scaleSize(20),
    s25: scaleSize(25),
    s30: scaleSize(30),
    s35: scaleSize(35),
    s40: scaleSize(40),
    s45: scaleSize(45),
    s50: scaleSize(50),
  },
};

export default metrics;

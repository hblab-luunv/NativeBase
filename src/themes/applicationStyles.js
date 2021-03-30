import {Platform} from 'react-native';
import metrics from './metrics';
import colors from './colors';

const applicationStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'ios' ? 0 : metrics.statusBarHeight,
  },
};

export default applicationStyles;

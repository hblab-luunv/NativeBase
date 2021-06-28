import I18n from 'react-native-i18n';

import en from './locales/en';
import ja from './locales/ja';

I18n.translations = {
  en,
  ja,
};
I18n.defaultLocale = 'ja';
I18n.locale = 'ja';

export default I18n;

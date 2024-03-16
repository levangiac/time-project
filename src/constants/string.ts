import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'vn';

const strings = {
  vn: {
    onboarding: {
      oneText: 'Chào mừng bạn đến với chúng tôi',
      twoText: 'Xếp đồ đạc vào vali !!!',
      threeText: 'Và đi thôi nào',
      getStarted: 'Bắt đầu',
    },
    homeScreen: {
      Alarms: 'Chuông báo',
    },
  },
  en: {
    onboarding: {
      oneText: 'Hello. Well come to Travel App',
      twoText: 'Put your things in your suitcase',
      threeText: `And let's go`,
      getStarted: 'Get Started',
    },
    homeScreen: {
      Alarms: 'Alarms',
    },
  },
};
export default new LocalizedStrings(strings);

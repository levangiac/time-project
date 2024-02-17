import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'en';

const strings = {
  en: {
    onboarding: {
      oneText: 'Hello. TimeMaster will remind you in the upcoming time.',
      twoText: 'Important events.',
      threeText: 'And more surprises ...',
      getStarted: 'Get Started',
    },
    homeScreen: {
      hello: 'Hello',
    },
  },
  vn: {
    onboarding: {
      oneText: 'Xin Chào. Thời gian tới TimeMaster sẽ đồng hành cùng bạn.',
      twoText: 'Nhiều sự kiện quan trọng cần nhắc nhở trong ngày.',
      threeText: 'Và rất nhiều bất ngờ ...',
      getStarted: 'Bắt đầu',
    },
    homeScreen: {
      hello: 'Hello',
    },
  },
};
export default new LocalizedStrings(strings);

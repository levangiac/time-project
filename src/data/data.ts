import { AnimationObject } from 'lottie-react-native';
import { JSON } from '~/assets/imagePath';
import { pColor } from '~styles/colors';

import strings from '~constants/string';
export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: JSON.aAlarmClock,
    text: strings.onboarding.oneText,
    textColor: pColor.white,
    backgroundColor: pColor.pinkChart,
  },
  {
    id: 2,
    animation: JSON.aNote,
    text: strings.onboarding.twoText,
    textColor: pColor.darkBlue,
    backgroundColor: pColor.grayDisplay,
  },
  {
    id: 3,
    animation: JSON.aGift,
    text: strings.onboarding.threeText,
    textColor: pColor.orange2,
    backgroundColor: pColor.greenNice,
  },
];

export default data;

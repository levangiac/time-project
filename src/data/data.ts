import { AnimationObject } from 'lottie-react-native';
import { JSON } from '~/assets/imagePath';
import { pColor } from '~styles/colors';

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
    text: 'Hello. TimeMaster will remind you in the upcoming time.',
    textColor: pColor.white,
    backgroundColor: pColor.pinkChart,
  },
  {
    id: 2,
    animation: JSON.aNote,
    text: 'Important Events',
    textColor: pColor.darkBlue,
    backgroundColor: pColor.grayDisplay,
  },
  {
    id: 3,
    animation: JSON.aGift,
    text: 'And More Surprises ...',
    textColor: pColor.orange2,
    backgroundColor: pColor.greenNice,
  },
];

export default data;

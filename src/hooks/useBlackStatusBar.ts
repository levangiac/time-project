import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { pColor } from '~styles/colors';
import { IS_IOS } from '../constants';

const useBlackStatusBar = () => {
  const focused = useIsFocused();
  useEffect(() => {
    if (focused) {
      if (!IS_IOS) {
        StatusBar.setBackgroundColor(pColor.white, true);
      }
      StatusBar.setBarStyle('dark-content');
    } else {
      if (!IS_IOS) {
        StatusBar.setBackgroundColor(pColor.white, true);
      }
      StatusBar.setBarStyle('dark-content');
    }
  }, [focused]);

  return null;
};

export default useBlackStatusBar;

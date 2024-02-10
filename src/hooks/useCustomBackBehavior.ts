import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import { showMessage } from 'react-native-flash-message';

let countTap = 0;
export default function useCustomBackBehavior(navigation: any) {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (!navigation?.canGoBack()) {
          //   console.log('----------->');
          ToastAndroid.show('Tap again to exit', ToastAndroid.SHORT);
          //   showMessage({
          //     floating: true,
          //     message: 'Tap again to exit',
          //     duration: 2000,
          //     position: 'center',
          //     // titleStyle: {  },
          //   });

          if (countTap === 0) {
            countTap = 1;
          } else if (countTap === 1) {
            BackHandler.exitApp();
          }
          setTimeout(() => {
            countTap = 0;
          }, 1500); // 2 seconds to tap second-time
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation])
  );
}

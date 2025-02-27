import { StyleSheet, View, FlatList, ViewToken } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
} from 'react-native-reanimated';

import Pagination from '~components/Pagination';
import CustomButton from '~components/CustomButton';
import RenderItem from '~components/RenderItem';
import { RootStackScreenProps } from '~navigators/RootStack';
import BootSplash from 'react-native-bootsplash';
import { isSeenOnBoarding, updateSeenOnBoarding } from '~utils/asyncStorage';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ROOT_ROUTE_KEY } from '~navigators/RouterKey';
import { useLocalizationContext } from '~theme/localization';
import { AnimationObject } from 'lottie-react-native';
import { JSON } from '~/assets/imagePath';
import { pColor } from '~styles/colors';
interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const OnboardingScreen = (props: RootStackScreenProps<'OnboardingScreen'>) => {
  const navigation = useNavigation();
  const [showOnBoarding, setShowOnBoarding] = useState<string | undefined>();
  const { strings, initializeAppLanguage } = useLocalizationContext();
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

  useLayoutEffect(() => {
    initializeAppLanguage();
    isSeenOnBoarding().then((isSeen) => {
      setShowOnBoarding(isSeen);
      if (isSeen !== 'false') {
        navigation.dispatch(StackActions.replace(ROOT_ROUTE_KEY.BottomTab));
        BootSplash.hide({ fade: true });
      }
    });
    // updateSeenOnBoarding('false');
  }, []);
  useEffect(() => {
    setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 1000);
  }, []);

  const flatListRef = useAnimatedRef<FlatList<OnboardingData>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0]?.index !== null) {
      flatListIndex.value = viewableItems[0]?.index;
    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event?.contentOffset?.x;
    },
  });
  if (showOnBoarding === 'false') {
    return (
      <View style={styles.container}>
        <Animated.FlatList
          ref={flatListRef}
          onScroll={onScroll}
          data={data}
          renderItem={({ item, index }) => {
            return <RenderItem item={item} index={index} x={x} />;
          }}
          keyExtractor={(item) => item.id.toString()}
          scrollEventThrottle={16}
          horizontal={true}
          bounces={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            minimumViewTime: 300,
            viewAreaCoveragePercentThreshold: 10,
          }}
        />
        <View style={styles.bottomContainer}>
          <Pagination data={data} x={x} />
          <CustomButton
            flatListRef={flatListRef}
            flatListIndex={flatListIndex}
            dataLength={data.length}
            x={x}
          />
        </View>
      </View>
    );
  }
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1000,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingVertical: 30,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
});
export default OnboardingScreen;

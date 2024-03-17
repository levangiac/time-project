import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

import { RouteProp, useNavigation } from '@react-navigation/native';
import { HomeScreensParams, UseHomeNavigation } from '~navigators/BottomTab';
import { ICON } from '~/assets/imagePath';
import { widthScale } from '~constants/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type DetailsScreenRouteProp = RouteProp<HomeScreensParams, 'Detail'>;

type Props = {
  route: DetailsScreenRouteProp;
};

const Detail = ({ route }: Props) => {
  const item = route?.params?.item;
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.iconBack, { top: inset.top }]} entering={FadeIn.delay(400)}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={ICON.back} style={styles.chevron} resizeMode="contain" />
        </Pressable>
      </Animated.View>
      <View>
        <View>
          <Animated.Image
            sharedTransitionTag={item?.name}
            source={{ uri: item?.uri }}
            style={{ width: width, height: width }}
          />
          <Animated.View style={styles.textContainer} entering={FadeIn.delay(600)}>
            <Text style={styles.textName}>{item?.name}</Text>
            <Text style={styles.textLocation}>{item?.location}</Text>
          </Animated.View>
        </View>
        <Animated.View entering={FadeInDown.delay(800)}>
          <Text style={styles.textAbout}>Giới Thiệu</Text>
          <Text style={styles.text}>{item?.about}</Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 16,
    borderRadius: 20,
  },
  textName: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  textLocation: {
    color: 'white',
    fontSize: 16,
  },
  textAbout: {
    color: '#323232',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
  },
  text: {
    color: '#323232',
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: 'justify',
  },
  chevron: {
    width: widthScale(25),
    height: widthScale(25),
    padding: 15,
  },
  iconBack: {
    position: 'absolute',
    left: 10,
    right: 20,
    zIndex: 1,
  },
});

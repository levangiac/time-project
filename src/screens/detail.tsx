import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

import { RouteProp } from '@react-navigation/native';
import { HomeScreensParams } from '~navigators/BottomTab';

type DetailsScreenRouteProp = RouteProp<HomeScreensParams, 'Detail'>;

type Props = {
  route: DetailsScreenRouteProp;
};

const Detail = ({ route }: Props) => {
  const { item } = route.params;
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Animated.Image
            sharedTransitionTag={item.name}
            source={{ uri: item.uri }}
            style={{ width: width, height: width }}
          />
          <Animated.View style={styles.textContainer} entering={FadeIn.delay(600)}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textLocation}>{item.location}</Text>
          </Animated.View>
        </View>
        <Animated.View entering={FadeInDown.delay(800)}>
          <Text style={styles.textAbout}>Giới Thiệu</Text>
          <Text style={styles.text}>{item.about}</Text>
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
});

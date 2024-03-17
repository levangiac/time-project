import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Data } from '~/data/data';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { HomeScreenProps, HomeScreensParams } from '~navigators/BottomTab';
import { ROOT_ROUTE_KEY } from '~navigators/RouterKey';

type Props = { item: Data; index: number };

const HomeRenderItem = ({ item, index }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeScreensParams>>();
  return (
    <Animated.View entering={FadeInDown.delay(200 * index)}>
      <Pressable
        style={styles.container}
        onPress={() => {
          navigation.navigate(ROOT_ROUTE_KEY.Detail, { item: item });
        }}
      >
        <Animated.Image
          source={{ uri: item.uri }}
          style={styles.image}
          sharedTransitionTag={item.name}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textLocation}>{item.location}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default HomeRenderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  textContainer: {
    margin: 20,
    flexShrink: 1,
    gap: 10,
  },
  textName: {
    color: '#323232',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textLocation: {
    color: '#323232',
    fontSize: 18,
  },
});

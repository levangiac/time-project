import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from '~navigators/RootStack';
import { pColor } from '~styles/colors';
import { ICON } from '~/assets/imagePath';
import { WIDTH_SCALE } from '~constants/index';
import PTouchableOpacity from '~components/PTouchableOpacity';

const Home = (props: RootStackScreenProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <PTouchableOpacity style={styles.iconSetting}>
        <Image source={ICON.setting} style={styles.icon} />
      </PTouchableOpacity>
      <Text>{'Hi'}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pColor.white,
  },
  iconSetting: {
    alignSelf: 'flex-end',
    padding: 15 * WIDTH_SCALE,
  },
  icon: {
    width: 25 * WIDTH_SCALE,
    height: 25 * WIDTH_SCALE,
  },
});
export default Home;

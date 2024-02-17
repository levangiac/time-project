import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import FrameCallbackDino from '~components/dinoframe';
import MainContainer from '~components/MainContainer';
import PTouchableOpacity from '~components/PTouchableOpacity';
import { useNavigation } from '@react-navigation/native';
import { ICON } from '~/assets/imagePath';
import { WIDTH_SCALE } from '~constants/index';

type Props = {};

const Games = (props: Props) => {
  const navigation = useNavigation();
  return (
    <MainContainer style={styles.container}>
      <PTouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonBack}>
        <Image source={ICON.back} style={styles.iconBack} />
      </PTouchableOpacity>
      <FrameCallbackDino />
    </MainContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  iconBack: {
    width: 20,
    height: 20,
  },
  buttonBack: {
    padding: 10 * WIDTH_SCALE,
  },
});

export default Games;

import { StyleSheet, Animated, StatusBar, View, Text } from 'react-native';
import React, { useEffect, useLayoutEffect, useRef } from 'react';

import { RootStackScreenProps } from '~navigators/RootStack';

const Splash = (props: RootStackScreenProps<'Splash'>) => {
  const { navigation } = props;

  useLayoutEffect(() => {}, []);
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Text>{'Bao'}</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

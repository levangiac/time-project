import { View, Text } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from '~navigators/RootStack';

const Home = (props: RootStackScreenProps<'Home'>) => {
  return (
    <View>
      <Text>{'Hi'}</Text>
    </View>
  );
};

export default Home;

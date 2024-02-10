import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import React from 'react';
import { ROOT_ROUTE_KEY } from './RouterKey';
import Splash from '~screens/splash';

export type RootStackScreensParams = {
  Splash: undefined;
  // BottomTab: undefined | NavigatorScreenParams<BottomTabRoutes>;
  SignIn: undefined;
  SignUp: { mobile?: string };
};

export type RootStackScreens = keyof RootStackScreensParams;

export type RootStackScreenProps<T extends RootStackScreens> = NativeStackScreenProps<
  RootStackScreensParams,
  T
>;
const { Navigator, Screen } = createNativeStackNavigator<RootStackScreensParams>();

const RootStack = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name={ROOT_ROUTE_KEY.Splash} component={Splash} />
  </Navigator>
);

export default RootStack;

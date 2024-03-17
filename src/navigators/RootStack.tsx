import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ROOT_ROUTE_KEY } from './RouterKey';
import OnboardingScreen from '~screens/onboarding';
import BottomTab, { BottomTabScreensParams } from './BottomTab';
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackScreensParams = {
  OnboardingScreen: undefined;
  BottomTab: undefined | NavigatorScreenParams<BottomTabScreensParams>;
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
    <Screen name={ROOT_ROUTE_KEY.OnboardingScreen} component={OnboardingScreen} />
    <Screen name={ROOT_ROUTE_KEY.BottomTab} component={BottomTab} />
  </Navigator>
);

export default RootStack;

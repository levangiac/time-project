import { Image, ImageURISource, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthScale } from '~constants/index';
import { pColor } from '~styles/colors';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import { RootStackScreenProps, RootStackScreensParams } from './RootStack';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { ROOT_ROUTE_KEY } from './RouterKey';
import Home from '~screens/home';
import Setting from '~screens/setting';
import { ICON } from '~/assets/imagePath';
import { myText } from '~styles/typography';
import Games from '~screens/games';
import Detail from '~screens/detail';
import { Data } from '~/data/data';

export type BottomTabScreensParams = {
  HomeStack: undefined | NavigatorScreenParams<HomeScreensParams>;
  Setting: undefined;
  Games: undefined;
};
export type HomeScreensParams = {
  Home: undefined | { item: Data };
  Detail: undefined | { item: Data };
};

export type HomeScreens = keyof HomeScreensParams;

export type HomeScreenProps<T extends HomeScreens> = NativeStackScreenProps<HomeScreensParams, T>;

export type UseHomeNavigation<T extends HomeScreens> = NativeStackNavigationProp<
  HomeScreensParams,
  T
>;

const HomeStack = (props: BottomTabScreenProps<'HomeStack'>) => {
  const { Navigator, Screen } = createNativeStackNavigator<HomeScreensParams>();
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={ROOT_ROUTE_KEY.Home}>
      <Screen name={ROOT_ROUTE_KEY.Home} component={Home} />
      <Screen name={ROOT_ROUTE_KEY.Detail} component={Detail} />
    </Navigator>
  );
};
export type BottomTabScreens = keyof BottomTabScreensParams;
export interface BottomTabScreenProps<T extends BottomTabScreens> {
  navigation: CompositeNavigationProp<
    MaterialBottomTabNavigationProp<BottomTabScreensParams, T>,
    NativeStackNavigationProp<RootStackScreensParams>
  >;
  route: RouteProp<BottomTabScreensParams, T>;
}
const BottomTab = (props: RootStackScreenProps<'BottomTab'>) => {
  const Tab = createBottomTabNavigator<BottomTabScreensParams>();
  const renderIcon = (icon: ImageURISource, focused: boolean, title?: string) => {
    return (
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          tintColor: focused ? pColor.lightBlueChart : pColor.grayDisable,
          width: title == 'HomeStack' ? widthScale(28) : widthScale(20),
          height: title == 'HomeStack' ? widthScale(28) : widthScale(20),
          marginTop: widthScale(5),
        }}
      />
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={ROOT_ROUTE_KEY.HomeStack}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => renderIcon(ICON.home_focus, focused, 'HomeStack'),
          title: 'HomeStack',
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...(focused ? myText.H12_BOLD : myText.H12),
                color: focused ? pColor.lightBlue : pColor.disableText,
                paddingBottom: widthScale(5),
              }}
            >
              Trang chủ
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name={ROOT_ROUTE_KEY.Games}
        component={Games}
        options={{
          tabBarIcon: ({ focused }) => renderIcon(ICON.games, focused),
          title: 'Games',
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...(focused ? myText.H12_BOLD : myText.H12),
                color: focused ? pColor.lightBlue : pColor.disableText,
                paddingBottom: widthScale(5),
              }}
            >
              Trò chơi
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={ROOT_ROUTE_KEY.Setting}
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => renderIcon(ICON.user_2, focused),
          title: 'Setting',
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...(focused ? myText.H12_BOLD : myText.H12),
                color: focused ? pColor.lightBlue : pColor.disableText,
                paddingBottom: widthScale(5),
              }}
            >
              Tài khoản
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});

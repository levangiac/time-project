import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAppLanguage = async () => {
  try {
    const appLanguage = await AsyncStorage.getItem('@appLanguage:key');
    return appLanguage !== null ? appLanguage : '';
  } catch (e) {
    console.log(e);
  }
};

export const updateAppLanguage = async (language = '') => {
  try {
    await AsyncStorage.setItem('@appLanguage:key', language);
  } catch (e) {
    console.log(e);
  }
};
export const getAppTheme = async () => {
  try {
    const appTheme = await AsyncStorage.getItem('@appTheme:key');
    return appTheme !== null ? appTheme : '';
  } catch (e) {
    console.log(e);
  }
};
export const isSeenOnBoarding = async () => {
  try {
    const isSeenOnBoarding = await AsyncStorage.getItem('@onBoarding:key');
    return isSeenOnBoarding !== null ? isSeenOnBoarding : 'false';
  } catch (e) {
    console.log(e);
  }
};
export const updateSeenOnBoarding = async (isSeen = 'false') => {
  try {
    await AsyncStorage.setItem('@onBoarding:key', isSeen);
  } catch (e) {
    console.log(e);
  }
};

export const updateAppTheme = async (ThemeColor = '') => {
  try {
    await AsyncStorage.setItem('@appTheme:key', ThemeColor);
  } catch (e) {
    console.log(e);
  }
};

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

export const updateAppTheme = async (ThemeColor = '') => {
  try {
    await AsyncStorage.setItem('@appTheme:key', ThemeColor);
  } catch (e) {
    console.log(e);
  }
};

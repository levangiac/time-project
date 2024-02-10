import { Dimensions, Platform } from 'react-native';
import Config from 'react-native-config';

import { Edge } from 'react-native-safe-area-context';

export const DEBUG = __DEV__ ? true : false;
export const BUILD_TESTER = __DEV__;

export const DELAY_TIME = 300;
export const TIME_OUT_DELAY_STUDY = 10000;

export const KEYGEOCODER = '';
// export const BASE_URL = DEBUG || BUILD_TESTER ? Config.STAGING_API_URL : Config.API_URL;
export const BASE_URL = DEBUG
  ? Config.DEV_API_URL
  : BUILD_TESTER
  ? Config.STAGING_API_URL
  : Config.PRODUCT_API_URL;
export const BASE_URL2 = `${BASE_URL}/api/v1/`;
export const SOCKET_URL = '';
export const IMAGE_THUMBNAIL_URL = 'https://picsum.photos/200';
export const PAYPAL_CLIENT_ID = '';
export const PAYPAL_SECRET_ID = '';
export const PAYPAL_LOGIN_RETURN_URL = '';
export const PAYPAL_SCOPE = 'openid email';
export const PAYPAL_LOGIN_INITIAL_URL = '';
export const FACEBOOK_PERMISSION = ['public_profile', 'email'];

//! TODO: check lại do modal của android
export const { width, height } = Dimensions.get('screen');
export const WIDTH = Math.min(width, height);
export const HEIGHT = Math.max(width, height);

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
// export const IS_TABLET = deviceInfoModule.isTablet();

export const EDGES: Edge[] = IS_IOS ? ['top', 'right', 'left'] : ['top', 'bottom', 'right', 'left'];

export const baseWidth = 375;
export const baseHeight = 812;
export const WIDTH_SCALE = WIDTH / baseWidth;
export const HEIGHT_SCALE = HEIGHT / baseHeight;

export const headerHeight = WIDTH_SCALE * 60;
export const iconSize = WIDTH_SCALE * 20;
export const heightBottomBar = WIDTH_SCALE * 69;
export const textInputHeight = WIDTH_SCALE * 54;
export const heightButton = WIDTH_SCALE * 36;
export const MAP_ZOOM_LEVEL = 13;
export const PADDING = 16 * WIDTH_SCALE;
export const TIMEOUT = 259200;
export const HITSLOP = {
  top: 15 * WIDTH_SCALE,
  right: 15 * WIDTH_SCALE,
  bottom: 15 * WIDTH_SCALE,
  left: 15 * WIDTH_SCALE,
};
export const LIMIT = 10;
export const COMPETITION_QUESTIONS_POOL_LIMIT = 20;
export const QUESTION_TYPE = {
  FILL_IN_BLANK: '3',
  KOREAN_MEANING: '1',
  ENGLISH_MEANING: '2',
};

export const SUBSCRIPTIONS_PRODUCTS_LIST = Platform.select({
  ios: ['name_package'],
  android: ['name_package'],
  default: ['name_package'],
});

export const PURCHASE_PRODUCTS_LIST = Platform.select({
  ios: ['PURCHASE_PRODUCTS_LIST', 'PURCHASE_PRODUCTS_LIST1'],
  android: ['PURCHASE_PRODUCTS_LIST', 'PURCHASE_PRODUCTS_LIST1'],
  default: ['PURCHASE_PRODUCTS_LIST', 'PURCHASE_PRODUCTS_LIST1'],
});

const guidelineBaseWidth = 360; //1135;

const guidelineBaseHeight = 740; //2436

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const [shortDimension, longDimension] =
  window.width < window.height ? [window.width, window.height] : [window.height, window.width];
const [shortDimensionScreen, longDimensionScreen] =
  screen.width < screen.height ? [screen.width, screen.height] : [screen.height, screen.width];

export const scale = (size = 1) => (shortDimension / guidelineBaseWidth) * size;
export const moderateScale = (size = 1, factor = 0.5) => size + (scale(size) - size) * factor;

export const widthScale = (size = 1) => (shortDimension / guidelineBaseWidth) * size;
export const moderateWidthScale = (size = 1, factor = 0.5) =>
  size + (widthScale(size) - size) * factor;

export const heightScale = (size = 1) => (longDimension / guidelineBaseHeight) * size;
export const moderateHeightScale = (size = 1, factor = 0.5) =>
  size + (heightScale(size) - size) * factor;

export const windowWidth = (percent = 1) => shortDimension * percent;
export const windowHeight = (percent = 1) => longDimension * percent;
export const screenWidth = (percent = 1) => shortDimensionScreen * percent;
export const screenHeight = (percent = 1) => longDimensionScreen * percent;

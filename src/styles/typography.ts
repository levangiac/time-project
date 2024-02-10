import { pColor } from './colors';
import { PixelRatio } from 'react-native';
import { WIDTH_SCALE, widthScale, HEIGHT_SCALE } from '../constants';

export const pFont = {
  REGULAR: 'Pretendard-Regular',
  MEDIUM: 'Pretendard-Medium',
  BOLD: 'Pretendard-Bold',
  P_BLACK: 'Pretendard-Black',
  P_BOLD: 'Pretendard-Bold',
  P_EBOLD: 'Pretendard-ExtraBold',
  P_ELIGHT: 'Pretendard-ExtraLight',
  P_LIGHT: 'Pretendard-Light',
  P_MEDIUM: 'Pretendard-Medium',
  P_REGULAR: 'Pretendard-Regular',
  P_SBOLD: 'Pretendard-SemiBold',
  P_THIN: 'Pretendard-Thin',
};

const fontSize =
  PixelRatio.get() <= 1.5 ? 12 : PixelRatio.get() > 1.5 && PixelRatio.get() < 3 ? 13 : 14;
const scale = Math.min(WIDTH_SCALE, HEIGHT_SCALE);
export const pFontSize = (size = fontSize) => Math.ceil(size * scale);

const defaultFont = 12;
export const pText = {
  H00: {
    fontSize: pFontSize(fontSize) + 22,
  },
  H0: {
    fontSize: pFontSize(fontSize) + 16,
  },
  H1: {
    fontSize: pFontSize(fontSize) + 8,
  },
  H2: {
    fontSize: pFontSize(fontSize) + 6,
  },
  H3: {
    fontSize: pFontSize(fontSize) + 4,
  },
  H4: {
    fontSize: pFontSize(fontSize) + 2,
  },
  BODY1: {
    fontSize: pFontSize(fontSize) + 0,
  },
  BODY12: {
    fontSize: pFontSize(fontSize) - 1.75,
  },
  BODY2: {
    fontSize: pFontSize(fontSize) - 2,
  },
  SMALL1: {
    fontSize: pFontSize(fontSize) - 3,
  },
  SMALL12: {
    fontSize: pFontSize(fontSize) - 4,
  },
  SMALL2: {
    fontSize: pFontSize(fontSize) - 5,
  },
  BUTTON: {
    fontSize: pFontSize(fontSize) - 2,
    textTransform: 'uppercase',
  },
  TITLE: {
    fontSize: pFontSize(fontSize) + 50,
  },

  // Confiuaration of main fonts
  BLACK_10: {
    letterSpacing: widthScale(-0.2),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(10),
    color: pColor.black,
  },
  BOLD_10: {
    letterSpacing: widthScale(-0.2),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(10),
    color: pColor.black,
  },
  EBOLD_10: {
    letterSpacing: widthScale(-0.2),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(10),
    color: pColor.black,
  },
  ELIGHT_10: {
    letterSpacing: widthScale(-0.2),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(10),
    color: pColor.black,
  },
  LIGHT_10: {
    letterSpacing: widthScale(-0.2),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(10),
    color: pColor.black,
  },
  MEDIUM_10: {
    letterSpacing: widthScale(-0.2),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(10),
    color: pColor.black,
  },
  REGULAR_10: {
    letterSpacing: widthScale(-0.2),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(10),
    color: pColor.black,
  },
  SBOLD_10: {
    letterSpacing: widthScale(-0.2),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(10),
    color: pColor.black,
  },
  THIN_10: {
    letterSpacing: widthScale(-0.2),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(10),
    color: pColor.black,
  },
  BLACK_11: {
    letterSpacing: widthScale(-0.22),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(11),
    color: pColor.black,
  },
  BOLD_11: {
    letterSpacing: widthScale(-0.22),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(11),
    color: pColor.black,
  },
  EBOLD_11: {
    letterSpacing: widthScale(-0.22),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(11),
    color: pColor.black,
  },
  ELIGHT_11: {
    letterSpacing: widthScale(-0.22),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(11),
    color: pColor.black,
  },
  LIGHT_11: {
    letterSpacing: widthScale(-0.22),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(11),
    color: pColor.black,
  },
  MEDIUM_11: {
    letterSpacing: widthScale(-0.22),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(11),
    color: pColor.black,
  },
  REGULAR_11: {
    letterSpacing: widthScale(-0.22),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(11),
    color: pColor.black,
  },
  SBOLD_11: {
    letterSpacing: widthScale(-0.22),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(11),
    color: pColor.black,
  },
  THIN_11: {
    letterSpacing: widthScale(-0.22),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(11),
    color: pColor.black,
  },
  BLACK_12: {
    letterSpacing: widthScale(-0.24),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(12),
    color: pColor.black,
  },
  BOLD_12: {
    letterSpacing: widthScale(-0.24),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(12),
    color: pColor.black,
  },
  EBOLD_12: {
    letterSpacing: widthScale(-0.24),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(12),
    color: pColor.black,
  },
  ELIGHT_12: {
    letterSpacing: widthScale(-0.24),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(12),
    color: pColor.black,
  },
  LIGHT_12: {
    letterSpacing: widthScale(-0.24),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(12),
    color: pColor.black,
  },
  MEDIUM_12: {
    letterSpacing: widthScale(-0.24),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(12),
    color: pColor.black,
  },
  REGULAR_12: {
    letterSpacing: widthScale(-0.24),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(12),
    color: pColor.black,
  },
  SBOLD_12: {
    letterSpacing: widthScale(-0.24),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(12),
    color: pColor.black,
  },
  THIN_12: {
    letterSpacing: widthScale(-0.24),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(12),
    color: pColor.black,
  },
  BLACK_13: {
    letterSpacing: widthScale(-0.26),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(13),
    color: pColor.black,
  },
  BOLD_13: {
    letterSpacing: widthScale(-0.26),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(13),
    color: pColor.black,
  },
  EBOLD_13: {
    letterSpacing: widthScale(-0.26),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(13),
    color: pColor.black,
  },
  ELIGHT_13: {
    letterSpacing: widthScale(-0.26),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(13),
    color: pColor.black,
  },
  LIGHT_13: {
    letterSpacing: widthScale(-0.26),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(13),
    color: pColor.black,
  },
  MEDIUM_13: {
    letterSpacing: widthScale(-0.26),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(13),
    color: pColor.black,
  },
  REGULAR_13: {
    letterSpacing: widthScale(-0.26),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(13),
    color: pColor.black,
  },
  SBOLD_13: {
    letterSpacing: widthScale(-0.26),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(13),
    color: pColor.black,
  },
  THIN_13: {
    letterSpacing: widthScale(-0.26),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(13),
    color: pColor.black,
  },
  BLACK_14: {
    letterSpacing: widthScale(-0.28),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(14),
    color: pColor.black,
  },
  BOLD_14: {
    letterSpacing: widthScale(-0.28),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(14),
    color: pColor.black,
  },
  EBOLD_14: {
    letterSpacing: widthScale(-0.28),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(14),
    color: pColor.black,
  },
  ELIGHT_14: {
    letterSpacing: widthScale(-0.28),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(14),
    color: pColor.black,
  },
  LIGHT_14: {
    letterSpacing: widthScale(-0.28),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(14),
    color: pColor.black,
  },
  MEDIUM_14: {
    letterSpacing: widthScale(-0.28),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(14),
    color: pColor.black,
  },
  REGULAR_14: {
    letterSpacing: widthScale(-0.28),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(14),
    color: pColor.black,
  },
  SBOLD_14: {
    letterSpacing: widthScale(-0.28),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(14),
    color: pColor.black,
  },
  THIN_14: {
    letterSpacing: widthScale(-0.28),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(14),
    color: pColor.black,
  },
  BLACK_15: {
    letterSpacing: widthScale(-0.3),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(15),
    color: pColor.black,
  },
  BOLD_15: {
    letterSpacing: widthScale(-0.3),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(15),
    color: pColor.black,
  },
  EBOLD_15: {
    letterSpacing: widthScale(-0.3),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(15),
    color: pColor.black,
  },
  ELIGHT_15: {
    letterSpacing: widthScale(-0.3),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(15),
    color: pColor.black,
  },
  LIGHT_15: {
    letterSpacing: widthScale(-0.3),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(15),
    color: pColor.black,
  },
  MEDIUM_15: {
    letterSpacing: widthScale(-0.3),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(15),
    color: pColor.black,
  },
  REGULAR_15: {
    letterSpacing: widthScale(-0.3),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(15),
    color: pColor.black,
  },
  SBOLD_15: {
    letterSpacing: widthScale(-0.3),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(15),
    color: pColor.black,
  },
  THIN_15: {
    letterSpacing: widthScale(-0.3),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(15),
    color: pColor.black,
  },
  BLACK_16: {
    letterSpacing: widthScale(-0.32),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(16),
    color: pColor.black,
  },
  BOLD_16: {
    letterSpacing: widthScale(-0.32),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(16),
    color: pColor.black,
  },
  EBOLD_16: {
    letterSpacing: widthScale(-0.32),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(16),
    color: pColor.black,
  },
  ELIGHT_16: {
    letterSpacing: widthScale(-0.32),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(16),
    color: pColor.black,
  },
  LIGHT_16: {
    letterSpacing: widthScale(-0.32),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(16),
    color: pColor.black,
  },
  MEDIUM_16: {
    letterSpacing: widthScale(-0.32),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(16),
    color: pColor.black,
  },
  REGULAR_16: {
    letterSpacing: widthScale(-0.32),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(16),
    color: pColor.black,
  },
  SBOLD_16: {
    letterSpacing: widthScale(-0.32),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(16),
    color: pColor.black,
  },
  THIN_16: {
    letterSpacing: widthScale(-0.32),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(16),
    color: pColor.black,
  },
  BLACK_17: {
    letterSpacing: widthScale(-0.34),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(17),
    color: pColor.black,
  },
  BOLD_17: {
    letterSpacing: widthScale(-0.34),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(17),
    color: pColor.black,
  },
  EBOLD_17: {
    letterSpacing: widthScale(-0.34),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(17),
    color: pColor.black,
  },
  ELIGHT_17: {
    letterSpacing: widthScale(-0.34),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(17),
    color: pColor.black,
  },
  LIGHT_17: {
    letterSpacing: widthScale(-0.34),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(17),
    color: pColor.black,
  },
  MEDIUM_17: {
    letterSpacing: widthScale(-0.34),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(17),
    color: pColor.black,
  },
  REGULAR_17: {
    letterSpacing: widthScale(-0.34),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(17),
    color: pColor.black,
  },
  SBOLD_17: {
    letterSpacing: widthScale(-0.34),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(17),
    color: pColor.black,
  },
  THIN_17: {
    letterSpacing: widthScale(-0.34),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(17),
    color: pColor.black,
  },
  BLACK_18: {
    letterSpacing: widthScale(-0.36),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(18),
    color: pColor.black,
  },
  BOLD_18: {
    letterSpacing: widthScale(-0.36),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(18),
    color: pColor.black,
  },
  EBOLD_18: {
    letterSpacing: widthScale(-0.36),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(18),
    color: pColor.black,
  },
  ELIGHT_18: {
    letterSpacing: widthScale(-0.36),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(18),
    color: pColor.black,
  },
  LIGHT_18: {
    letterSpacing: widthScale(-0.36),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(18),
    color: pColor.black,
  },
  MEDIUM_18: {
    letterSpacing: widthScale(-0.36),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(18),
    color: pColor.black,
  },
  REGULAR_18: {
    letterSpacing: widthScale(-0.36),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(18),
    color: pColor.black,
  },
  SBOLD_18: {
    letterSpacing: widthScale(-0.36),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(18),
    color: pColor.black,
  },
  THIN_18: {
    letterSpacing: widthScale(-0.36),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(18),
    color: pColor.black,
  },
  BLACK_19: {
    letterSpacing: widthScale(-0.38),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(19),
    color: pColor.black,
  },
  BOLD_19: {
    letterSpacing: widthScale(-0.38),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(19),
    color: pColor.black,
  },
  EBOLD_19: {
    letterSpacing: widthScale(-0.38),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(19),
    color: pColor.black,
  },
  ELIGHT_19: {
    letterSpacing: widthScale(-0.38),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(19),
    color: pColor.black,
  },
  LIGHT_19: {
    letterSpacing: widthScale(-0.38),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(19),
    color: pColor.black,
  },
  MEDIUM_19: {
    letterSpacing: widthScale(-0.38),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(19),
    color: pColor.black,
  },
  REGULAR_19: {
    letterSpacing: widthScale(-0.38),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(19),
    color: pColor.black,
  },
  SBOLD_19: {
    letterSpacing: widthScale(-0.38),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(19),
    color: pColor.black,
  },
  THIN_19: {
    letterSpacing: widthScale(-0.38),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(19),
    color: pColor.black,
  },
  BLACK_20: {
    letterSpacing: widthScale(-0.4),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(20),
    color: pColor.black,
  },
  BOLD_20: {
    letterSpacing: widthScale(-0.4),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(20),
    color: pColor.black,
  },
  EBOLD_20: {
    letterSpacing: widthScale(-0.4),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(20),
    color: pColor.black,
  },
  ELIGHT_20: {
    letterSpacing: widthScale(-0.4),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(20),
    color: pColor.black,
  },
  LIGHT_20: {
    letterSpacing: widthScale(-0.4),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(20),
    color: pColor.black,
  },
  MEDIUM_20: {
    letterSpacing: widthScale(-0.4),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(20),
    color: pColor.black,
  },
  REGULAR_20: {
    letterSpacing: widthScale(-0.4),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(20),
    color: pColor.black,
  },
  SBOLD_20: {
    letterSpacing: widthScale(-0.4),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(20),
    color: pColor.black,
  },
  THIN_20: {
    letterSpacing: widthScale(-0.4),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(20),
    color: pColor.black,
  },
  BOLD_21: {
    letterSpacing: widthScale(-0.4),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(21),
    color: pColor.black,
  },
  BLACK_22: {
    letterSpacing: widthScale(-0.44),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(22),
    color: pColor.black,
  },
  BOLD_22: {
    letterSpacing: widthScale(-0.44),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(22),
    color: pColor.black,
  },
  EBOLD_22: {
    letterSpacing: widthScale(-0.44),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(22),
    color: pColor.black,
  },
  ELIGHT_22: {
    letterSpacing: widthScale(-0.44),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(22),
    color: pColor.black,
  },
  LIGHT_22: {
    letterSpacing: widthScale(-0.44),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(22),
    color: pColor.black,
  },
  MEDIUM_22: {
    letterSpacing: widthScale(-0.44),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(22),
    color: pColor.black,
  },
  REGULAR_22: {
    letterSpacing: widthScale(-0.44),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(22),
    color: pColor.black,
  },
  SBOLD_22: {
    letterSpacing: widthScale(-0.44),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(22),
    color: pColor.black,
  },
  THIN_22: {
    letterSpacing: widthScale(-0.44),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(22),
    color: pColor.black,
  },
  BOLD_23: {
    letterSpacing: widthScale(-0.44),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(23),
    color: pColor.black,
  },
  BLACK_24: {
    letterSpacing: widthScale(-0.48),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(24),
    color: pColor.black,
  },
  BOLD_24: {
    letterSpacing: widthScale(-0.48),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(24),
    color: pColor.black,
  },
  EBOLD_24: {
    letterSpacing: widthScale(-0.48),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(24),
    color: pColor.black,
  },
  ELIGHT_24: {
    letterSpacing: widthScale(-0.48),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(24),
    color: pColor.black,
  },
  LIGHT_24: {
    letterSpacing: widthScale(-0.48),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(24),
    color: pColor.black,
  },
  MEDIUM_24: {
    letterSpacing: widthScale(-0.48),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(24),
    color: pColor.black,
  },
  REGULAR_24: {
    letterSpacing: widthScale(-0.48),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(24),
    color: pColor.black,
  },
  SBOLD_24: {
    letterSpacing: widthScale(-0.48),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(24),
    color: pColor.black,
  },
  THIN_24: {
    letterSpacing: widthScale(-0.48),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(24),
    color: pColor.black,
  },
  BLACK_26: {
    letterSpacing: widthScale(-0.52),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(26),
    color: pColor.black,
  },
  BOLD_26: {
    letterSpacing: widthScale(-0.52),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(26),
    color: pColor.black,
  },
  EBOLD_26: {
    letterSpacing: widthScale(-0.52),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(26),
    color: pColor.black,
  },
  ELIGHT_26: {
    letterSpacing: widthScale(-0.52),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(26),
    color: pColor.black,
  },
  LIGHT_26: {
    letterSpacing: widthScale(-0.52),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(26),
    color: pColor.black,
  },
  MEDIUM_26: {
    letterSpacing: widthScale(-0.52),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(26),
    color: pColor.black,
  },
  REGULAR_26: {
    letterSpacing: widthScale(-0.52),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(26),
    color: pColor.black,
  },
  SBOLD_26: {
    letterSpacing: widthScale(-0.52),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(26),
    color: pColor.black,
  },
  THIN_26: {
    letterSpacing: widthScale(-0.52),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(26),
    color: pColor.black,
  },
  BLACK_27: {
    letterSpacing: widthScale(-0.54),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(27),
    color: pColor.black,
  },
  BOLD_27: {
    letterSpacing: widthScale(-0.54),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(27),
    color: pColor.black,
  },
  EBOLD_27: {
    letterSpacing: widthScale(-0.54),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(27),
    color: pColor.black,
  },
  ELIGHT_27: {
    letterSpacing: widthScale(-0.54),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(27),
    color: pColor.black,
  },
  LIGHT_27: {
    letterSpacing: widthScale(-0.54),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(27),
    color: pColor.black,
  },
  MEDIUM_27: {
    letterSpacing: widthScale(-0.54),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(27),
    color: pColor.black,
  },
  REGULAR_27: {
    letterSpacing: widthScale(-0.54),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(27),
    color: pColor.black,
  },
  SBOLD_27: {
    letterSpacing: widthScale(-0.54),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(27),
    color: pColor.black,
  },
  THIN_27: {
    letterSpacing: widthScale(-0.54),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(27),
    color: pColor.black,
  },
  BLACK_32: {
    letterSpacing: widthScale(-0.64),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(32),
    color: pColor.black,
  },
  BOLD_32: {
    letterSpacing: widthScale(-0.64),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(32),
    color: pColor.black,
  },
  EBOLD_32: {
    letterSpacing: widthScale(-0.64),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(32),
    color: pColor.black,
  },
  ELIGHT_32: {
    letterSpacing: widthScale(-0.64),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(32),
    color: pColor.black,
  },
  LIGHT_32: {
    letterSpacing: widthScale(-0.64),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(32),
    color: pColor.black,
  },
  MEDIUM_32: {
    letterSpacing: widthScale(-0.64),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(32),
    color: pColor.black,
  },
  REGULAR_32: {
    letterSpacing: widthScale(-0.64),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(32),
    color: pColor.black,
  },
  SBOLD_32: {
    letterSpacing: widthScale(-0.64),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(32),
    color: pColor.black,
  },
  THIN_32: {
    letterSpacing: widthScale(-0.64),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(32),
    color: pColor.black,
  },
  BLACK_38: {
    letterSpacing: widthScale(-0.76),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(38),
    color: pColor.black,
  },
  BOLD_38: {
    letterSpacing: widthScale(-0.76),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(38),
    color: pColor.black,
  },
  EBOLD_38: {
    letterSpacing: widthScale(-0.76),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(38),
    color: pColor.black,
  },
  ELIGHT_38: {
    letterSpacing: widthScale(-0.76),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(38),
    color: pColor.black,
  },
  LIGHT_38: {
    letterSpacing: widthScale(-0.76),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(38),
    color: pColor.black,
  },
  MEDIUM_38: {
    letterSpacing: widthScale(-0.76),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(38),
    color: pColor.black,
  },
  REGULAR_38: {
    letterSpacing: widthScale(-0.76),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(38),
    color: pColor.black,
  },
  SBOLD_38: {
    letterSpacing: widthScale(-0.76),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(38),
    color: pColor.black,
  },
  THIN_38: {
    letterSpacing: widthScale(-0.76),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(38),
    color: pColor.black,
  },
  BLACK_60: {
    letterSpacing: widthScale(-1.2),
    fontFamily: pFont.P_BLACK,
    fontSize: pFontSize(60),
    color: pColor.black,
  },
  BOLD_60: {
    letterSpacing: widthScale(-1.2),
    fontFamily: pFont.P_BOLD,
    fontSize: pFontSize(60),
    color: pColor.black,
  },
  EBOLD_60: {
    letterSpacing: widthScale(-1.2),
    fontFamily: pFont.P_EBOLD,
    fontSize: pFontSize(60),
    color: pColor.black,
  },
  ELIGHT_60: {
    letterSpacing: widthScale(-1.2),
    fontFamily: pFont.P_ELIGHT,
    fontSize: pFontSize(60),
    color: pColor.black,
  },
  LIGHT_60: {
    letterSpacing: widthScale(-1.2),
    fontFamily: pFont.P_LIGHT,
    fontSize: pFontSize(60),
    color: pColor.black,
  },
  MEDIUM_60: {
    letterSpacing: widthScale(-1.2),
    fontFamily: pFont.P_MEDIUM,
    fontSize: pFontSize(60),
    color: pColor.black,
  },
  REGULAR_60: {
    letterSpacing: widthScale(-1.2),
    fontFamily: pFont.P_REGULAR,
    fontSize: pFontSize(60),
    color: pColor.black,
  },
  SBOLD_60: {
    letterSpacing: widthScale(-1.2),
    fontFamily: pFont.P_SBOLD,
    fontSize: pFontSize(60),
    color: pColor.black,
  },
  THIN_60: {
    letterSpacing: widthScale(-1.2),
    fontFamily: pFont.P_THIN,
    fontSize: pFontSize(60),
    color: pColor.black,
  },
};

export const myText = {
  H10: {
    fontSize: pFontSize(10),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H10_MEDIUM: {
    fontSize: pFontSize(10),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H10_BOLD: {
    fontSize: pFontSize(10),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H11: {
    fontSize: pFontSize(11),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H11_MEDIUM: {
    fontSize: pFontSize(11),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H11_BOLD: {
    fontSize: pFontSize(11),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H12: {
    fontSize: pFontSize(defaultFont),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H12_MEDIUM: {
    fontSize: pFontSize(defaultFont),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H12_BOLD: {
    fontSize: pFontSize(defaultFont),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H13: {
    fontSize: pFontSize(defaultFont + 1),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H13_MEDIUM: {
    fontSize: pFontSize(defaultFont + 1),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H13_BOLD: {
    fontSize: pFontSize(defaultFont + 1),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H14: {
    fontSize: pFontSize(defaultFont + 2),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H14_MEDIUM: {
    fontSize: pFontSize(defaultFont + 2),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H14_BOLD: {
    fontSize: pFontSize(defaultFont + 2),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H15: {
    fontSize: pFontSize(defaultFont + 3),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H15_MEDIUM: {
    fontSize: pFontSize(defaultFont + 3),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H15_BOLD: {
    fontSize: pFontSize(defaultFont + 3),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H16: {
    fontSize: pFontSize(defaultFont + 4),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H16_MEDIUM: {
    fontSize: pFontSize(defaultFont + 4),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H16_BOLD: {
    fontSize: pFontSize(defaultFont + 4),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H17: {
    fontSize: pFontSize(defaultFont + 5),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H17_MEDIUM: {
    fontSize: pFontSize(defaultFont + 5),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H17_BOLD: {
    fontSize: pFontSize(defaultFont + 5),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H18: {
    fontSize: pFontSize(defaultFont + 6),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H18_MEDIUM: {
    fontSize: pFontSize(defaultFont + 6),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H18_BOLD: {
    fontSize: pFontSize(defaultFont + 6),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H20: {
    fontSize: pFontSize(defaultFont + 8),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H20_MEDIUM: {
    fontSize: pFontSize(defaultFont + 8),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H20_BOLD: {
    fontSize: pFontSize(defaultFont + 8),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H21: {
    fontSize: pFontSize(defaultFont + 9),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H21_MEDIUM: {
    fontSize: pFontSize(defaultFont + 9),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H21_BOLD: {
    fontSize: pFontSize(defaultFont + 9),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H22: {
    fontSize: pFontSize(defaultFont + 10),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H22_MEDIUM: {
    fontSize: pFontSize(defaultFont + 10),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H22_BOLD: {
    fontSize: pFontSize(defaultFont + 10),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H23: {
    fontSize: pFontSize(defaultFont + 11),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H23_MEDIUM: {
    fontSize: pFontSize(defaultFont + 11),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H23_BOLD: {
    fontSize: pFontSize(defaultFont + 11),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H24: {
    fontSize: pFontSize(defaultFont + 12),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H24_MEDIUM: {
    fontSize: pFontSize(defaultFont + 12),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H24_BOLD: {
    fontSize: pFontSize(defaultFont + 12),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H26: {
    fontSize: pFontSize(defaultFont + 14),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H26_MEDIUM: {
    fontSize: pFontSize(defaultFont + 14),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H26_BOLD: {
    fontSize: pFontSize(defaultFont + 14),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
  H27: {
    fontSize: pFontSize(defaultFont + 15),
    fontFamily: pFont.REGULAR,
    color: pColor.textColor1,
  },
  H27_MEDIUM: {
    fontSize: pFontSize(defaultFont + 15),
    fontFamily: pFont.MEDIUM,
    color: pColor.textColor1,
  },
  H27_BOLD: {
    fontSize: pFontSize(defaultFont + 15),
    fontFamily: pFont.BOLD,
    color: pColor.textColor1,
  },
};

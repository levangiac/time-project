import { WIDTH_SCALE, heightButton } from '../constants';
import { pColor } from './colors';

export const styleAllButton = {
  height: heightButton,
  paddingHorizontal: WIDTH_SCALE * 32,
  borderRadius: WIDTH_SCALE * 10,
  justifyContent: 'center' as 'center',
  alignItems: 'center' as 'center',
  flexDirection: 'row' as 'row',
};
export const pButton = {
  FILL: {
    // ...pShadow.BLUR0,
    backgroundColor: pColor.appColor,
  },
  FILL_DISABLED: {
    // ...pShadow.BLUR0,
    backgroundColor: pColor.appColorHover,
  },
  OUTLINE: {
    // ...pShadow.BLUR0,
    borderWidth: 1,
    borderColor: pColor.appColor,
    backgroundColor: '#ffffff',
  },
  OUTLINE_DISABLED: {
    // ...pShadow.BLUR0,
    borderWidth: 1,
    borderColor: pColor.black,
    backgroundColor: pColor.appColorHover,
  },
  OUTLINE_WHITE: {
    // ...pShadow.BLUR0,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
  },
  CIRCLE: {
    width: heightButton,
    height: heightButton,
    borderRadius: heightButton / 2,
    backgroundColor: pColor.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BACK_CIRCLE: {
    width: heightButton * 3,
    height: heightButton * 3,
    borderRadius: heightButton * 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

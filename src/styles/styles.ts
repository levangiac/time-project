import { Platform, StyleSheet } from 'react-native';
import {
  headerHeight,
  heightBottomBar,
  HEIGHT_SCALE,
  iconSize,
  textInputHeight,
  WIDTH_SCALE,
} from '../constants';
import { pButton, styleAllButton } from './button';
import { pColor } from './colors';
import { pFontSize } from './typography';

const pStyle = StyleSheet.create({
  backBtnSize: { left: -10 * WIDTH_SCALE, width: WIDTH_SCALE * 24 },
  full: { height: '100%', width: '100%' },

  text: {
    color: pColor.textColor,
  },
  text2: {
    color: pColor.textColor,
  },

  textHeader: {
    color: pColor.textColor,
  },
  textHeader2: {
    color: pColor.textColor,
    textAlign: 'center',
  },
  textHeader3: {
    color: pColor.textColor,
    textAlign: 'center',
  },
  textSubTitle: {
    color: pColor.textSubColor,
  },
  textTitle: {
    color: pColor.textColor,
  },

  textTitle2: {
    color: pColor.textColor,
  },
  textTitle3: {
    color: pColor.textColor,
  },

  textCaption: {
    color: pColor.textSubColor,
  },

  textCaption2: {
    color: pColor.textSubColor,
  },
  textCaption3: {
    color: pColor.textColor,
  },
  textInput: {
    color: pColor.textColor2,
  },
  textInput2: {
    color: pColor.textColor2,
  },
  textButton: {
    color: pColor.white,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButtonDisable: {
    color: pColor.disableText,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButton2: {
    color: pColor.appColor,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButton2Disable: {
    color: pColor.disableText,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButtonOutLine: {
    color: pColor.appColor,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButtonOutLine2: {
    color: pColor.textColor,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButtonOutLineDisable: {
    color: pColor.disableText,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  textButtonOutLine2Disable: {
    color: pColor.disableText,
    textAlign: 'center',
  },
  textShadow: {
    textShadowColor: '#00000060',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10 * WIDTH_SCALE,
  },
  textShadow2: {
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5 * WIDTH_SCALE,
  },
  //header
  titleHeader: {
    color: pColor.appColor,
    textAlign: 'center',
  },
  divider: {
    backgroundColor: pColor.divider,
    height: 1,
    width: '100%',
  },
  textNull: {
    color: pColor.divider,
    width: '90%',
  },
  textNull2: {
    color: pColor.divider,
    width: '30%',
  },
  border: {
    borderColor: pColor.borderColor,
    borderRadius: 4 * WIDTH_SCALE,
    borderWidth: 0.5 * WIDTH_SCALE,
  },
  borderImage: {
    borderColor: pColor.borderColor,
    borderRadius: 4 * WIDTH_SCALE,
    borderWidth: 0.5 * WIDTH_SCALE,
  },
  //Button
  button: {
    ...pButton.FILL,
    ...styleAllButton,
  },
  button2: {
    ...pButton.FILL,
    backgroundColor: '#F3EEFE',
    ...styleAllButton,
  },
  buttonDisable: {
    ...pButton.FILL,
    ...styleAllButton,

    backgroundColor: pColor.disableButton,
  },
  buttonOutline: {
    ...pButton.OUTLINE,
    ...styleAllButton,
  },
  buttonOutlineDisable: {
    ...pButton.OUTLINE,
    ...styleAllButton,

    borderColor: pColor.disableButton,
  },
  buttonOutlineWhite: {
    ...pButton.OUTLINE_WHITE,
    ...styleAllButton,
  },
  buttonIcon: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'baseline',
    borderRadius: 2 * WIDTH_SCALE,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5 * WIDTH_SCALE,
  },
  input: {
    backgroundColor: pColor.backgroundInput,
    borderColor: '#87755c30',
    borderRadius: 8 * WIDTH_SCALE,
    borderWidth: 2,
    height: textInputHeight,
    justifyContent: 'center',
    paddingHorizontal: 8 * WIDTH_SCALE,
    paddingVertical: 0,
  },
  input2: {
    borderRadius: 20 * WIDTH_SCALE,
    height: textInputHeight * 1.1,
    marginBottom: 18 * HEIGHT_SCALE,
    paddingHorizontal: 24 * WIDTH_SCALE,
    width: '100%',
    ...Platform.select({
      android: {
        backgroundColor: 'white',
        elevation: 2,
      },
      ios: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
        shadowOpacity: 0.16,
      },
    }),
  },
  inputArena: {
    borderColor: pColor.borderColor,
    borderRadius: 2 * WIDTH_SCALE,
    borderWidth: 1,
    color: pColor.textSubColor,
    padding: 16 * WIDTH_SCALE,
  },
  icon: {
    color: pColor.appColor,
    fontSize: pFontSize(iconSize),
  },
  btnRightStyle: {
    alignItems: 'center',
    backgroundColor: '#00000050',
    justifyContent: 'center',
    marginRight: 8 * WIDTH_SCALE,
    paddingHorizontal: 0,
  },
  iconSectionImage: {
    height: 24 * WIDTH_SCALE,
    width: 24 * WIDTH_SCALE,
  },
  // iconOnHeaderBarSize: {
  //   height: IS_TABLET ? HEIGHT_SCALE * 70 : HEIGHT_SCALE * 80,
  //   width: IS_TABLET ? HEIGHT_SCALE * 70 : HEIGHT_SCALE * 80,
  //   zIndex: 9999,
  // },
  iconOnHeaderBarShadow: {
    borderRadius: (HEIGHT_SCALE * 100) / 2,
    height: HEIGHT_SCALE * 100,
    width: HEIGHT_SCALE * 100,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 3,
        shadowOpacity: 0.6,
      },
    }),
    zIndex: 9999,
  },
  //shadow
  shadow: {},
  shadow2: {
    borderColor: pColor.borderColor,
    borderWidth: WIDTH_SCALE,
  },

  header: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: headerHeight,
    width: '100%',
    zIndex: 9999,
  },
  //modal
  textModal: {
    color: pColor.textColor,
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  content: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingHorizontal: 16 * WIDTH_SCALE,
  },
  center: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddingBottomTabbar: {
    paddingBottom: heightBottomBar + 80 * HEIGHT_SCALE,
  },
  iconMicButton: {
    alignItems: 'center',
    backgroundColor: '#00000008',
    borderRadius: (36 * WIDTH_SCALE) / 2,
    height: 36 * WIDTH_SCALE,
    justifyContent: 'center',
    width: 36 * WIDTH_SCALE,
  },
});

export { pStyle };

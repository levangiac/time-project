import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { HEIGHT, HEIGHT_SCALE, WIDTH, widthScale } from '~constants/index';
import { pColor } from '~styles/colors';
import { ICON } from '~/assets/imagePath';
import PTouchableOpacity from './PTouchableOpacity';
import { PRow } from './PRow';

type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.reSearchStyle}>
        <Image source={ICON.search} resizeMode="contain" style={styles.Icon} />
        <TextInput style={styles.textInput}></TextInput>
      </View>
      <PRow>
        <PTouchableOpacity>
          <Image source={ICON.notice} resizeMode="contain" style={styles.IconNotice} />
        </PTouchableOpacity>
        <PTouchableOpacity>
          <Image source={ICON.word} resizeMode="contain" style={styles.IconNotice} />
        </PTouchableOpacity>
      </PRow>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    backgroundColor: pColor.blueChart,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  reSearchStyle: {
    width: WIDTH * 0.77,
    backgroundColor: pColor.white,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: '88%',
  },
  Icon: {
    width: widthScale(20),
    height: widthScale(20),
    marginLeft: 8,
    marginRight: 5,
    tintColor: pColor.greyChartIcon,
  },
  IconNotice: {
    width: widthScale(20),
    height: widthScale(20),
    tintColor: pColor.white,
    paddingHorizontal: 15,
  },
  textInput: {
    width: WIDTH * 0.77 - widthScale(22) - 13,
  },
});

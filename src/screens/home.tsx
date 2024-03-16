import { View, Text, StyleSheet, Image, FlatList, LayoutChangeEvent } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from '~navigators/RootStack';
import { pColor } from '~styles/colors';
import { ICON } from '~/assets/imagePath';
import { HEIGHT_SCALE, WIDTH_SCALE } from '~constants/index';
import PTouchableOpacity from '~components/PTouchableOpacity';
import MainContainer from '~components/MainContainer';
import { useLocalizationContext } from '~theme/localization';
import { pText } from '~styles/typography';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ROOT_ROUTE_KEY } from '~navigators/RouterKey';
import { updateSeenOnBoarding } from '~utils/asyncStorage';

const Home = (props: RootStackScreenProps<'Home'>) => {
  const { strings } = useLocalizationContext();
  const navigation = useNavigation();
  const getX = (event: LayoutChangeEvent) => {
    console.log('🚀 ~ getX ~ event:', event?.nativeEvent?.layout?.x, event?.nativeEvent?.layout?.y);
  };
  // updateSeenOnBoarding('false');
  return (
    <MainContainer style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>{strings.homeScreen.Alarms}</Text>
        <View style={styles.buttons}>
          <PTouchableOpacity
            style={styles.iconAdd}
            onPress={() => navigation.dispatch(StackActions.push(ROOT_ROUTE_KEY.Games))}
          >
            <Image source={ICON.add_plus} style={styles.iconAddStyle} />
          </PTouchableOpacity>
          <PTouchableOpacity style={styles.iconSetting}>
            <Image source={ICON.setting} style={styles.iconSettingStyle} onLayout={getX} />
          </PTouchableOpacity>
        </View>
      </View>
      <FlatList data={[{}]} renderItem={({ item }) => <View></View>} style={styles.flatList} />
    </MainContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pColor.backgroundInput,
  },

  header: {
    marginTop: 10 * HEIGHT_SCALE,
    flexDirection: 'row',
    alignContent: 'center',
    paddingLeft: 15 * WIDTH_SCALE,
    justifyContent: 'space-between',
  },
  textHeader: {
    ...pText.BOLD_20,
    fontWeight: '700',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  buttons: {
    flexDirection: 'row',
  },
  iconAdd: {
    padding: 12 * WIDTH_SCALE,
    alignSelf: 'center',
  },
  iconAddStyle: {
    width: 14 * WIDTH_SCALE,
    height: 14 * WIDTH_SCALE,
    tintColor: pColor.black,
  },
  iconSetting: {
    padding: 12 * WIDTH_SCALE,
    alignSelf: 'center',
  },
  iconSettingStyle: {
    width: 16 * WIDTH_SCALE,
    height: 16 * WIDTH_SCALE,
    tintColor: pColor.black,
  },
  flatList: {
    flex: 1,
    borderTopLeftRadius: 20 * WIDTH_SCALE,
    borderTopRightRadius: 20 * WIDTH_SCALE,
  },
});
export default Home;

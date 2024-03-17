import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  LayoutChangeEvent,
  ScrollView,
} from 'react-native';
import React from 'react';
import { pColor } from '~styles/colors';
import { ICON } from '~/assets/imagePath';
import { HEIGHT_SCALE, WIDTH, WIDTH_SCALE } from '~constants/index';
import PTouchableOpacity from '~components/PTouchableOpacity';
import MainContainer from '~components/MainContainer';
import { useLocalizationContext } from '~theme/localization';
import { pText } from '~styles/typography';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ROOT_ROUTE_KEY } from '~navigators/RouterKey';
import { BottomTabScreenProps, HomeScreenProps } from '~navigators/BottomTab';
import HomeHeader from '~components/HomeHeader';
import data from '~/data/data';
import HomeRenderItem from '~components/HomeRenderItem';
import { updateSeenOnBoarding } from '~utils/asyncStorage';

const Home = (props: HomeScreenProps<'Home'>) => {
  const { strings } = useLocalizationContext();
  const navigation = useNavigation();
  updateSeenOnBoarding('false');
  return (
    <MainContainer style={styles.container}>
      <HomeHeader />
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <View style={styles.header}>
          <Text style={styles.textLogin}>Đăng ký thành viên, hưởng nhiều ưu đãi</Text>
          <PTouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.textButtonLogin}>Đăng nhập/Đăng ký</Text>
          </PTouchableOpacity>
        </View>
        {data.map((item, index) => {
          return <HomeRenderItem item={item} index={index} key={index} />;
        })}
      </ScrollView>
    </MainContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pColor.backgroundInput,
  },
  header: {
    alignContent: 'center',
    backgroundColor: pColor.blueChart,
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
  },
  textLogin: {
    textAlign: 'center',
    color: pColor.white,
    fontSize: 13,
    fontWeight: '500',
  },
  buttonRegister: {
    borderWidth: 1,
    borderColor: pColor.white,
    backgroundColor: pColor.blueChart,
    marginVertical: 10,
    width: WIDTH - 120,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 8,
  },
  textButtonLogin: {
    color: pColor.white,
    fontWeight: '700',
  },
});
export default Home;

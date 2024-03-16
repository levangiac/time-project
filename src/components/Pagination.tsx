import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SharedValue } from 'react-native-reanimated';
import Dot from './Dot';
import { AnimationObject } from 'lottie-react-native';
interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}
type Props = {
  data: OnboardingData[];
  x: SharedValue<number>;
};
const Pagination = ({ data, x }: Props) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => {
        return <Dot index={index} x={x} key={index} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Pagination;

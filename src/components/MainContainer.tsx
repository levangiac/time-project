import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeSafeAreaViewProps, SafeAreaView } from 'react-native-safe-area-context';
import { pColor } from '~styles/colors';

interface MainContainerProps extends NativeSafeAreaViewProps {}

const MainContainer: React.FC<MainContainerProps> = ({ children, style, edges, ...rest }) => {
  return (
    <SafeAreaView style={[styles.container, style]} edges={edges} {...rest}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pColor.white,
  },
});

export default MainContainer;

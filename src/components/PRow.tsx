import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  isTabScreen?: boolean;
}
export const PRow: React.FC<React.ComponentProps<typeof View> & Props> = ({
  children,
  style,
  ...rest
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      {...rest}
      style={StyleSheet.flatten([{ flexDirection: 'row', alignItems: 'center' }, style])}
    >
      {children}
    </View>
  );
};

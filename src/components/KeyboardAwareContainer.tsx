import React from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps extends React.ComponentProps<typeof KeyboardAwareScrollView> {
  edges?: Edge[];
  mode?: 'padding' | 'margin';
  header?: React.ReactNode;
  keyboardVerticalOffset?: number;
  children?: React.ReactNode;
  scrollEnabled?: boolean;
}

const KeyboardAwareContainer = React.forwardRef<KeyboardAwareScrollView, ContainerProps>(
  ({ children, edges, mode, header, ...rest }, ref) => {
    return (
      <SafeAreaView edges={edges} mode={mode} style={styles.safeAreaView}>
        {header}
        <KeyboardAwareScrollView ref={ref} {...rest}>
          {children}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default KeyboardAwareContainer;

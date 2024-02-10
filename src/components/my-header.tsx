import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { ICON } from '~/assets/imagePath';
import { PRow } from '~components/PRow';
import { HEIGHT_SCALE, PADDING, WIDTH_SCALE, widthScale } from '~constants/index';
import { myText } from '~styles/typography';

interface Props {
  onBackPress?: () => void;
  headerText?: string;
  hideBackButton?: boolean;
  rightContent?: React.ReactNode;
  headerTextStyle?: TextStyle;
  headerContainerStyle?: ViewStyle;
}

const MyHeader: React.FC<Props> = memo((props) => {
  const {
    onBackPress,
    headerText = '',
    hideBackButton,
    rightContent,
    headerTextStyle,
    headerContainerStyle,
  } = props;
  const navigation = useNavigation();
  return (
    <PRow style={[styles.container, headerContainerStyle]}>
      {hideBackButton ? null : (
        <TouchableOpacity
          onPress={() => {
            if (onBackPress) {
              onBackPress();
            } else {
              navigation?.canGoBack() && navigation?.goBack();
            }
          }}
          style={[styles.backIconContainerStyle]}
        >
          <Image source={ICON.back} resizeMode="contain" style={styles.backIconStyle} />
        </TouchableOpacity>
      )}

      <Text style={[styles.headerText, headerTextStyle]}>{headerText}</Text>

      <View style={{ marginLeft: 'auto' }}>{rightContent}</View>
    </PRow>
  );
});

export default MyHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 40 * HEIGHT_SCALE,
    marginHorizontal: widthScale(5),
    marginTop: 10 * HEIGHT_SCALE,
  },
  backIconContainerStyle: {
    position: 'absolute',
    left: 0,
  },
  backIconStyle: {
    width: 25 * WIDTH_SCALE,
    height: 25 * WIDTH_SCALE,
  },
  headerText: {
    ...myText.H26_BOLD,
    position: 'absolute',
  },
});

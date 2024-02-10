import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';

function SvgSquareCheckBox(props: SvgProps) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Rect
        x="2.75"
        y="2.75"
        width="18.5"
        height="18.5"
        rx="3.25"
        stroke="#BDBDBD"
        stroke-width="1.5"
      />
    </Svg>
  );
}

export default SvgSquareCheckBox;

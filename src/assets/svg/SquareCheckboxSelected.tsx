import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';

function SvgSquareCheckBoxSelected(props: SvgProps) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Rect
        x="2.75"
        y="2.75"
        width="18.5"
        height="18.5"
        rx="3.25"
        fill="#F5184D"
        stroke="#F5184D"
        stroke-width="1.5"
      />
      <Path
        d="M7.5 12L11 16L16.5 7.5"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default SvgSquareCheckBoxSelected;

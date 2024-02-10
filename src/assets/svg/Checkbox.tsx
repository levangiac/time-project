import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCheckBox(props: SvgProps) {
  return (
    <Svg
      width="30"
      height="50"
      fill="none"
      {...props}
      viewBox="0 0 40 42"
      preserveAspectRatio="xMinYMin slice"
      {...props}
    >
      <Path
        clip-rule="evenodd"
        d="M11 20.17a9.17 9.17 0 100-18.34 9.17 9.17 0 000 18.34z"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="square"
      />
      <Path
        d="M8.5 11.42l1.94 2.08 3.9-4.17"
        stroke="#F6F6F6"
        stroke-width="2"
        stroke-linecap="square"
      />
    </Svg>
  );
}

export default SvgCheckBox;

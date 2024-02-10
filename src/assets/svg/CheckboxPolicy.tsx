import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCheckBoxPolicy(props: SvgProps) {
  return (
    <Svg fill="#B0B0B0" viewBox="0 0 24 24" width="15" height="22" fill-rule="evenodd" {...props}>
      <Path d="M 22.59375 3.5 L 8.0625 18.1875 L 1.40625 11.5625 L 0 13 L 8.0625 21 L 24 4.9375 Z" />
    </Svg>
  );
}

export default SvgCheckBoxPolicy;

import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgIcLop(props) {
  return (
    <Svg width={20} height={22} {...props}>
      <G
        data-name="Icon feather-home"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}>
        <Path data-name="Path 74" d="M7 21V11h6v10" stroke="#f59523" />
        <Path
          data-name="Path 183"
          d="M1 8l9-7 9 7v11a2 2 0 01-2 2H3a2 2 0 01-2-2z"
          stroke="#000"
        />
      </G>
    </Svg>
  );
}

export default SvgIcLop;
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgIcClock(props) {
  return (
    <Svg width={29.19} height={29.19} {...props}>
      <G
        data-name="Icon feather-clock"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path
          data-name="Path 186"
          d="M28.69 14.6A14.1 14.1 0 1114.6.5a14.1 14.1 0 0114.09 14.1z"
          stroke="#000"
        />
        <Path
          data-name="Path 187"
          d="M14.275 5.796v9.226l6.151 3.074"
          stroke="#f59523"
        />
      </G>
    </Svg>
  );
}

export default SvgIcClock;
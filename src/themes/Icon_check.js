import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

function SvgIcV(props) {
  return (
    <Svg width={36} height={36} {...props}>
      <G data-name="Group 4080" transform="translate(-307 -152)">
        <Circle
          data-name="Ellipse 38"
          cx={12.728}
          cy={12.728}
          r={12.728}
          transform="rotate(45 -20.98 468.31)"
          fill="#4cd964"
        />
        <G
          data-name="Group 291"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}>
          <Path data-name="Line 3" d="M329.939 166.606l-7.047 7.046" />
          <Path data-name="Line 4" d="M320.036 170.91l2.804 2.745" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgIcV;
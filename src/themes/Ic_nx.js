import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

function SvgIcNx(props) {
  return (
    <Svg width={16} height={16} {...props}>
      <G data-name="Group 4085" transform="translate(-337 -168)">
        <Circle
          data-name="Ellipse 40"
          cx={8}
          cy={8}
          r={8}
          transform="translate(337 168)"
          fill="#f26f21"
        />
        <Path
          data-name="Icon ionic-ios-arrow-forward"
          d="M346.135 176.394l-2.157 2.155a.406.406 0 000 .575.411.411 0 00.577 0l2.444-2.442a.407.407 0 00.012-.562l-2.454-2.459a.407.407 0 00-.577.575z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default SvgIcNx;
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgIcSearch(props) {
  return (
    <Svg width={21.811} height={21.811} {...props}>
      <G
        data-name="Icon feather-search"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}>
        <Path
          data-name="Path 189"
          d="M20.75 20.75l-4.833-4.833"
          stroke="#f59523"
        />
        <Path
          data-name="Path 190"
          d="M18.528 9.639A8.889 8.889 0 119.639.75a8.889 8.889 0 018.889 8.889z"
          stroke="#000"
        />
      </G>
    </Svg>
  );
}

export default SvgIcSearch;
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0,0,256,256"
    width="20px"
    height="20px"
    fillRule="nonzero"
    {...props}>
    <G fill="#6f7486">
      <G transform="scale(10.66667,10.66667)">
        <Path d="M22,20l-2,2l-6,-6v-2h2z" />
        <Path d="M9,16c-3.9,0 -7,-3.1 -7,-7c0,-3.9 3.1,-7 7,-7c3.9,0 7,3.1 7,7c0,3.9 -3.1,7 -7,7zM9,4c-2.8,0 -5,2.2 -5,5c0,2.8 2.2,5 5,5c2.8,0 5,-2.2 5,-5c0,-2.8 -2.2,-5 -5,-5z" />
        <Path
          transform="translate(-5.90254,14.24719) rotate(-44.992)"
          d="M13.7,12.5h1v3.5h-1z"
        />
      </G>
    </G>
  </Svg>
);
export default SVGComponent;

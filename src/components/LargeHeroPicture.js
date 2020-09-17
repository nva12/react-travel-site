import React from 'react';
import styled from 'styled-components';

// Images
const smaller = require('../images/hero--smaller.jpg');
const smallerHiDpi = require('../images/hero--smaller-hi-dpi.jpg');
const small = require('../images/hero--small.jpg');
const smallHiDpi = require('../images/hero--small-hi-dpi.jpg');
const medium = require('../images/hero--medium.jpg');
const mediumHiDpi = require('../images/hero--medium-hi-dpi.jpg');
const large = require('../images/hero--large.jpg');
const largeHiDpi = require('../images/hero--large-hi-dpi.jpg');

const Img = styled.img`
  display: block;
`;

const LargeHeroPicture = () => (
  <picture>
    <source
      srcSet={`${large} 1920w, ${largeHiDpi} 3840w`}
      media={'(min-width: 1380px)'}
    />
    <source
      srcSet={`${medium} 1380w, ${mediumHiDpi} 2760w`}
      media={'(min-width: 990px)'}
    />
    <source
      srcSet={`${small} 990w, ${smallHiDpi} 1980w`}
      media={'(min-width: 640px)'}
    />
    <Img
      srcSet={`${smaller} 640w, ${smallerHiDpi} 1280w`}
      alt={'Coastal view of ocean and mountains'}
    />
  </picture>
);

export default LargeHeroPicture;

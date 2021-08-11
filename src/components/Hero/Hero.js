import React from 'react';
import styled from 'styled-components/macro';

import ImageWithFallback from '../ImageWithFallback';

const Hero = () => {
  return (
    <Wrapper>
      <HeroImage 
        alt="An example of a photo distributed through this site (A yellow inqusitive cat with blue eyes)"
        src="/images/hero-img.jpg"
        />
      <Swoop alt="" src="/swoop.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled(ImageWithFallback)`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  min-height: 30px;
  object-fit: cover;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;

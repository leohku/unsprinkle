import React from 'react';
import styled from 'styled-components/macro';

import ImageWithFallback from '../ImageWithFallback';

const Hero = () => {
  const sources = [{
                    key: 1,
                    type: "image/avif",
                    srcset: "/images/hero-img.avif 1x, /images/hero-img@2x.avif 2x, /images/hero-img@3x.avif 3x",
                  },
                  {
                    key: 2,
                    type: "image/jpeg",
                    srcset: "/images/hero-img.jpg 1x, /images/hero-img@2x.jpg 2x, /images/hero-img@3x.jpg 3x",
                  }]

  return (
    <Wrapper>
      <HeroImage 
        sources={sources}
        alt="A yellow inqusitive cat with blue eyes"
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

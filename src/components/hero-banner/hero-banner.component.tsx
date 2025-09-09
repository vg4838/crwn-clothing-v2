import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import heroImage from '../../assets/hero.png';

import {
  HeroBannerContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ShopNowButton,
} from './hero-banner.styles';

const HeroBanner: FC = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/shop');
  };

  return (
    <HeroBannerContainer $heroImage={heroImage}>
      <HeroContent>
        <HeroTitle>Redefining Street Luxury</HeroTitle>
        <HeroSubtitle>Discover premium streetwear that speaks your language</HeroSubtitle>
        <ShopNowButton onClick={handleShopNow}>
          Shop Now
        </ShopNowButton>
      </HeroContent>
    </HeroBannerContainer>
  );
};

export default HeroBanner;

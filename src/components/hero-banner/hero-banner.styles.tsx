import styled from 'styled-components';

type HeroBannerContainerProps = {
  $heroImage: string;
};

export const HeroBannerContainer = styled.div<HeroBannerContainerProps>`
  width: 100%;
  height: calc(100vh - 70px);
  min-height: 600px;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${({ $heroImage }) => $heroImage});
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-top: 0;

  @media screen and (max-width: 768px) {
    height: calc(100vh - 70px);
    min-height: 500px;
    background-attachment: scroll;
    background-position: center center;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 600px;
  padding: 0 20px;
  z-index: 2;
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  line-height: 1.1;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const ShopNowButton = styled.button`
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  border: none;
  padding: 18px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
    background: linear-gradient(135deg, #ff5252, #d84315);

    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media screen and (max-width: 768px) {
    padding: 15px 35px;
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    padding: 12px 30px;
    font-size: 0.9rem;
  }
`;

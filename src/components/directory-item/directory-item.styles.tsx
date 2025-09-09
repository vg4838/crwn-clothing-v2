import styled from 'styled-components';

type BackgroundImageProps = {
  imageUrl: string;
};

type DirectoryItemContainerProps = {
  $isHero: boolean;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: transform 0.3s ease;
`;

export const Body = styled.div`
  height: 100px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  position: absolute;
  z-index: 2;
  transition: all 0.3s ease;

  h2 {
    font-weight: 700;
    margin: 0;
    font-size: 24px;
    color: #2c3e50;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    color: #34495e;
    margin-top: 8px;
  }
`;

export const DirectoryItemContainer = styled.div<DirectoryItemContainerProps>`
  width: 100%;
  height: ${({ $isHero }) => $isHero ? '60vh' : '100%'};
  min-height: ${({ $isHero }) => $isHero ? '400px' : '300px'};
  max-height: ${({ $isHero }) => $isHero ? '500px' : '400px'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    transition: all 0.3s ease;
  }

  &:hover {
    &::before {
      background: rgba(0, 0, 0, 0.5);
    }

    ${BackgroundImage} {
      transform: scale(1.1);
    }

    ${Body} {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.95);
    }
  }

  /* Hero item styling */
  ${({ $isHero }) => $isHero && `
    ${Body} {
      height: 120px;
      padding: 0 40px;
      
      h2 {
        font-size: 32px;
        margin-bottom: 8px;
      }
      
      p {
        font-size: 18px;
        font-weight: 500;
      }
    }
  `}

  @media screen and (max-width: 768px) {
    height: ${({ $isHero }) => $isHero ? '50vh' : '100%'};
    min-height: ${({ $isHero }) => $isHero ? '300px' : '250px'};
    max-height: ${({ $isHero }) => $isHero ? '400px' : '300px'};
    
    ${({ $isHero }) => $isHero && `
      ${Body} {
        height: 100px;
        padding: 0 30px;
        
        h2 {
          font-size: 28px;
        }
        
        p {
          font-size: 16px;
        }
      }
    `}
  }
`;

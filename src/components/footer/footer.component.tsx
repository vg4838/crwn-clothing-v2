import { Link } from 'react-router-dom';
import { FooterContainer, FooterContent, FooterSection, FooterTitle, FooterText, FooterLink, FooterBottom, FooterLinks, SocialLinks, SocialLink } from './footer.styles';
import LinkedInIcon from '../linkedin-icon/linkedin-icon.component';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterText>
            Have questions or need assistance? We'd love to hear from you!
          </FooterText>
          <FooterLink href="mailto:contact@crwnclothing.com">
            📧 contact@crwnclothing.com
          </FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink as={Link} to="/faq">FAQ</FooterLink>
            <FooterLink as={Link} to="/size-guide">Size Guide</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialLinks>
            <SocialLink 
              href="https://www.linkedin.com/company/crwn-clothing" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
            >
              <LinkedInIcon />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <FooterText>
          © 2024 CRWN Clothing. All rights reserved.
        </FooterText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

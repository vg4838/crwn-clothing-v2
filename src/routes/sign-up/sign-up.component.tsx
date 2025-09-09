import { Link } from 'react-router-dom';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import { 
  SignUpContainer, 
  FormWrapper, 
  HeaderSection, 
  FooterSection 
} from './sign-up.styles';

const SignUp = () => {
  return (
    <SignUpContainer>
      <FormWrapper>
        <HeaderSection>
          <h1>Create Account</h1>
          <p>Join us today and start your shopping journey</p>
        </HeaderSection>
        <SignUpForm />
        <FooterSection>
          <p>Already have an account? <Link to="/sign-in">Sign in here</Link></p>
        </FooterSection>
      </FormWrapper>
    </SignUpContainer>
  );
};

export default SignUp;

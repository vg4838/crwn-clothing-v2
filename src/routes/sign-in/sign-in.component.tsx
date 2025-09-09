import { Link } from 'react-router-dom';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { 
  SignInContainer, 
  FormWrapper, 
  HeaderSection, 
  FooterSection 
} from './sign-in.styles';

const SignIn = () => {
  return (
    <SignInContainer>
      <FormWrapper>
        <HeaderSection>
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue shopping</p>
        </HeaderSection>
        <SignInForm />
        <FooterSection>
          <p>Don't have an account? <Link to="/sign-up">Create one here</Link></p>
        </FooterSection>
      </FormWrapper>
    </SignInContainer>
  );
};

export default SignIn;

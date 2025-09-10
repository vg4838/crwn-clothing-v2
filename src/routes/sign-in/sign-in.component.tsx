import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { 
  SignInContainer, 
  FormWrapper, 
  HeaderSection, 
  FooterSection 
} from './sign-in.styles';

const SignIn = () => {
  const currentUser = useSelector(selectCurrentUser);

  // Show loading while checking authentication
  if (currentUser === undefined) {
    return <div>Loading...</div>;
  }

  // If user is authenticated, show a message instead of redirecting
  if (currentUser) {
    return (
      <SignInContainer>
        <FormWrapper>
          <HeaderSection>
            <h1>Already Signed In</h1>
            <p>You are already signed in as {currentUser.displayName || currentUser.email}</p>
            <p>
              <Link to="/">Go to Home</Link> or <Link to="/checkout">Continue to Checkout</Link>
            </p>
          </HeaderSection>
        </FormWrapper>
      </SignInContainer>
    );
  }

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

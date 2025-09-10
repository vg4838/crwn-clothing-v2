import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import Spinner from '../spinner/spinner.component';

import { SignInContainer, ButtonsContainer, ErrorMessage } from './sign-in-form.styles';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';
import { selectUserIsLoading, selectUserError } from '../../store/user/user.selector';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  const { email, password } = formFields;
  const isLoading = useSelector(selectUserIsLoading);
  const userError = useSelector(selectUserError);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setValidationErrors({});
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    // Email validation
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  if (isLoading) {
    return <Spinner />;
  }

  const getErrorMessage = (error: Error | null) => {
    if (!error) return '';
    
    const errorMessage = error.message;
    
    // Handle enhanced Google sign-in errors
    if (errorMessage.includes('Sign-in timed out')) {
      return 'Google sign-in timed out. Please try again.';
    }
    if (errorMessage.includes('Popup blocked')) {
      return 'Popup was blocked by your browser. Please allow popups for this site and try again.';
    }
    if (errorMessage.includes('Network error')) {
      return 'Network error occurred. Please check your connection and try again.';
    }
    if (errorMessage.includes('Browser security issue')) {
      return 'Browser security settings prevented sign-in. Please refresh the page and try again.';
    }
    if (errorMessage.includes('Google sign-in failed')) {
      return 'Google sign-in encountered an issue. Please try again.';
    }
    
    // Handle email/password sign-in errors
    if (errorMessage.includes('auth/user-not-found')) {
      return 'No account found with this email address.';
    }
    if (errorMessage.includes('auth/wrong-password')) {
      return 'Incorrect password. Please try again.';
    }
    if (errorMessage.includes('auth/invalid-email')) {
      return 'Please enter a valid email address.';
    }
    if (errorMessage.includes('auth/user-disabled')) {
      return 'This account has been disabled.';
    }
    if (errorMessage.includes('auth/too-many-requests')) {
      return 'Too many failed attempts. Please try again later.';
    }
    if (errorMessage.includes('auth/network-request-failed')) {
      return 'Network error. Please check your connection and try again.';
    }
    
    return 'Sign in failed. Please try again.';
  };

  return (
    <SignInContainer>
      <form onSubmit={handleSubmit}>
        {userError && (
          <ErrorMessage>
            {getErrorMessage(userError)}
          </ErrorMessage>
        )}
        
        {validationErrors.email && (
          <ErrorMessage>{validationErrors.email}</ErrorMessage>
        )}
        
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        {validationErrors.password && (
          <ErrorMessage>{validationErrors.password}</ErrorMessage>
        )}

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

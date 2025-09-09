import { useState, FormEvent, ChangeEvent } from 'react';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import Spinner from '../spinner/spinner.component';

import { SignUpContainer, ErrorMessage } from './sign-up-form.styles';
import { signUpStart } from '../../store/user/user.action';
import { selectUserIsLoading, selectUserError } from '../../store/user/user.selector';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUserIsLoading);
  const userError = useSelector(selectUserError);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setValidationErrors({});
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    // Display name validation
    if (!displayName.trim()) {
      errors.displayName = 'Display name is required';
    } else if (displayName.trim().length < 2) {
      errors.displayName = 'Display name must be at least 2 characters long';
    }
    
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
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    
    // Confirm password validation
    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        setValidationErrors({ email: 'An account with this email already exists' });
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const getErrorMessage = (error: Error | null) => {
    if (!error) return '';
    
    const errorMessage = error.message;
    
    if (errorMessage.includes('auth/email-already-in-use')) {
      return 'An account with this email already exists.';
    }
    if (errorMessage.includes('auth/invalid-email')) {
      return 'Please enter a valid email address.';
    }
    if (errorMessage.includes('auth/weak-password')) {
      return 'Password is too weak. Please choose a stronger password.';
    }
    if (errorMessage.includes('auth/network-request-failed')) {
      return 'Network error. Please check your connection and try again.';
    }
    
    return 'Sign up failed. Please try again.';
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SignUpContainer>
      <form onSubmit={handleSubmit}>
        {userError && (
          <ErrorMessage>
            {getErrorMessage(userError)}
          </ErrorMessage>
        )}
        
        {validationErrors.displayName && (
          <ErrorMessage>{validationErrors.displayName}</ErrorMessage>
        )}
        
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        {validationErrors.confirmPassword && (
          <ErrorMessage>{validationErrors.confirmPassword}</ErrorMessage>
        )}

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;

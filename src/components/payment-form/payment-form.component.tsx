import { useState, FormEvent } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { createOrderStart } from '../../store/orders/order.action';
import { clearCart } from '../../store/cart/cart.action';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  CardElementContainer,
  SecurityBadge,
  TestCardInfo,
} from './payment-form.styles';

const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#2c3e50',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        color: '#95a5a6',
      },
    },
    invalid: {
      color: '#e74c3c',
      iconColor: '#e74c3c',
    },
    complete: {
      color: '#27ae60',
      iconColor: '#27ae60',
    },
  },
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subtotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  
  // Calculate tax and final amount
  const taxRate = 0.08;
  const taxAmount = Math.round(subtotal * taxRate * 100) / 100;
  const amount = subtotal + taxAmount;

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    try {
      // Capture cart data before any async operations
      const capturedSubtotal = subtotal;
      const capturedAmount = amount;
      const capturedCartItems = [...cartItems];
      const capturedTax = taxAmount;

      // Create payment intent with error handling
      let response;
      try {
        const fetchResponse = await fetch('/.netlify/functions/create-payment-intent', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: capturedAmount * 100 }),
        });

        if (!fetchResponse.ok) {
          throw new Error(`Payment service error: ${fetchResponse.status}`);
        }

        response = await fetchResponse.json();
      } catch (error) {
        console.error('Payment intent creation failed:', error);
        alert('Failed to initialize payment. Please check your connection and try again.');
        setIsProcessingPayment(false);
        return;
      }

      const {
        paymentIntent: { client_secret },
      } = response;

      const cardDetails = elements.getElement(CardElement);

      if (!ifValidCardElement(cardDetails)) {
        setIsProcessingPayment(false);
        return;
      }

      // Confirm payment with error handling
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardDetails,
          billing_details: {
            name: currentUser ? currentUser.displayName : 'Guest',
          },
        },
      });

      if (paymentResult.error) {
        console.error('Payment confirmation failed:', paymentResult.error);
        
        // Handle specific Stripe error types
        let errorMessage = 'Payment failed. Please try again.';
        
        if (paymentResult.error.type === 'card_error') {
          errorMessage = paymentResult.error.message || 'Your card was declined. Please try a different card.';
        } else if (paymentResult.error.type === 'validation_error') {
          errorMessage = 'Please check your card details and try again.';
        } else if (paymentResult.error.type === 'api_connection_error') {
          errorMessage = 'Network error. Please check your connection and try again.';
        } else if (paymentResult.error.type === 'api_error') {
          errorMessage = 'Payment service temporarily unavailable. Please try again later.';
        } else if (paymentResult.error.type === 'authentication_error') {
          errorMessage = 'Authentication failed. Please refresh the page and try again.';
        } else if (paymentResult.error.type === 'rate_limit_error') {
          errorMessage = 'Too many requests. Please wait a moment and try again.';
        }
        
        alert(errorMessage);
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          // Create order in Firebase with captured values
          const orderData = {
            items: capturedCartItems,
            total: capturedAmount,
            subtotal: capturedSubtotal,
            shipping: 0,
            tax: capturedTax,
            paymentIntentId: paymentResult.paymentIntent.id,
            userEmail: currentUser?.email || 'guest@example.com',
          };

          dispatch(createOrderStart(orderData));
          dispatch(clearCart());

          // Navigate to thank you page with order details
          navigate(`/thank-you?orderId=${paymentResult.paymentIntent.id}&payment_intent=${paymentResult.paymentIntent.id}`);
        } else {
          // Handle other payment statuses
          alert('Payment was not completed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Unexpected payment error:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      // Always clear loading state
      setIsProcessingPayment(false);
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>💳 Secure Payment</h2>
        <CardElementContainer>
          <CardElement options={cardElementOptions} />
        </CardElementContainer>
        <p style={{ color: '#e74c3c', fontSize: '14px', textAlign: 'center', margin: '10px 0 20px 0' }}>
          *Use card: 4242424242424242 with valid future expiry and CVV
        </p>
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          disabled={isProcessingPayment}
        >
          {isProcessingPayment ? '🔄 Processing...' : `💰 Pay $${amount}`}
        </PaymentButton>
        <SecurityBadge>
          Your payment information is secure and encrypted
        </SecurityBadge>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;

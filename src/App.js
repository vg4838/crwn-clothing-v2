import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';
import { checkUserSession } from './store/user/user.action';
import { GlobalStyle } from './global.styles';

const Navigation = lazy(() =>
  import('./routes/navigation/navigation.component')
);
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(() =>
  import('./routes/authentication/authentication.component')
);
const SignIn = lazy(() => import('./routes/sign-in/sign-in.component'));
const SignUp = lazy(() => import('./routes/sign-up/sign-up.component'));
const ThankYou = lazy(() => import('./routes/thank-you/thank-you.component'));
const Orders = lazy(() => import('./routes/orders/orders.component'));
const Contact = lazy(() => import('./routes/contact/contact.component'));
const FAQ = lazy(() => import('./routes/faq/faq.component'));
const SizeGuide = lazy(() => import('./routes/size-guide/size-guide.component'));
const Account = lazy(() => import('./routes/account/account.component'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='thank-you' element={<ThankYou />} />
          <Route path='orders' element={<Orders />} />
          <Route path='account' element={<Account />} />
          <Route path='contact' element={<Contact />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='size-guide' element={<SizeGuide />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

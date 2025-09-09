import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to sign-in page when accessing /auth
    navigate('/sign-in', { replace: true });
  }, [navigate]);

  return null;
};

export default Authentication;

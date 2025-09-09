import { Outlet } from 'react-router-dom';

import HeroBanner from '../../components/hero-banner/hero-banner.component';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;

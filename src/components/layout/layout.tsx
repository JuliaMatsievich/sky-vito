import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import * as CM from '../../styles/commonStyles.styles';
import { Footer } from '../Footer/footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <CM.Container>
          <Outlet />
      </CM.Container>
      <Footer />
    </>
  );
};

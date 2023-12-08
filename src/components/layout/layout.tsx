import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import * as CM from '../../styles/commonStyles.styles';

export const Layout = () => {
  return (
    <>
      <Header />
      <CM.Container>
        <Outlet />
      </CM.Container>
    </>
  );
};

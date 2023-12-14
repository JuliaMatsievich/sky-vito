import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { MainPage } from './pages/mainPage';
import { ProfilePage } from './pages/profilePage';
import { AdvertPage } from './pages/advertPage';
import { ModalReviews } from './components/modal/modalReviews/modalReviews';
import { AdvertSettings } from './components/modal/advertSettings/advertSettings';
import { AuthPage } from './pages/authPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />}></Route>
      <Route path="/register" element={<AuthPage />}></Route>
      {/* <Route element={<ProtectedRoute />}> */}
      <Route path="/modalReviews" element={<ModalReviews />} />
      <Route path="/advertSettings" element={<AdvertSettings />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="advert" element={<AdvertPage />} />
      </Route>
      {/* </Route> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { MainPage } from './pages/mainPage';
import { ProfilePage } from './pages/profilePage';
import { AdvertPage } from './pages/advertPage';
import { ModalReviews } from './components/modal/modalReviews/modalReviews';
import { AdvertSettings } from './components/modal/advertSettings/advertSettings';
import { SellerProfilePage } from './pages/sellerProfilePage';
import { AuthPageSignIn } from './pages/authPageSignIn';
import { AuthPageSignUp } from './pages/authPageSignUp';
import { ProtectedRoute } from './components/protected-routes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<AuthPageSignIn />}></Route>
      <Route path="/signup" element={<AuthPageSignUp />}></Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="sellerProfile/:id" element={<SellerProfilePage />} />
        <Route path="advert/:id" element={<AdvertPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/modalReviews" element={<ModalReviews />} />
        <Route path="/advertSettings" element={<AdvertSettings />} />
        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { MainPage } from './pages/mainPage';
import { ProfilePage } from './pages/profilePage';
import { AdvertPage } from './pages/advertPage';
import { SellerProfilePage } from './pages/sellerProfilePage';
import { AuthPageSignIn } from './pages/authPageSignIn';
import { AuthPageSignUp } from './pages/authPageSignUp';
import { ProtectedRoute } from './components/protected-routes';
import { AddNewAdvertPage } from './pages/addNewAdvertPage';
import { RedactAdvertPage } from './pages/redactAdvertPage';
import { ReviewsAdvertPage } from './pages/reviewsPage';
import { NotFound } from './pages/notfound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<AuthPageSignIn />}></Route>
      <Route path="/signup" element={<AuthPageSignUp />}></Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="sellerProfile/:id" element={<SellerProfilePage />} />
        <Route path="advert/:id" element={<AdvertPage />} />
        <Route path="reviewsAdvert/:id" element={<ReviewsAdvertPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="addAdvert" element={<AddNewAdvertPage />} />
          <Route path="redactAdvert/:id" element={<RedactAdvertPage />} />
        </Route>
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

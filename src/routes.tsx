import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { MainPage } from './pages/mainPage';
import { ProfilePage } from './pages/profilePage';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route
			path="/login"
			element={<AuthPage isLoginMode={true}></AuthPage>}
		 ></Route>
		 <Route
			path="/register"
			element={<AuthPage isLoginMode={false}></AuthPage>}
		 ></Route> */}
      {/* <Route element={<ProtectedRoute />}> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      {/* </Route> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

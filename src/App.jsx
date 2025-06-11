import { lazy, Suspense, useEffect, } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectAuthError, selectIsRefreshing } from './redux/auth/selectors';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { Alert,  Box } from "@mui/material";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));


function App() {

  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    dispatch(refreshUser());
   }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing); 

  if (isRefreshing) {
    return (
      <Box textAlign="center" mt={5}>
        <Alert severity="info" sx={{ mt: 2 }}>Refreshing...</Alert>
      </Box>
    );
  }
  
  return error? ( <Alert severity="error" sx={{ mb: 2, fontWeight: 'medium', textAlign: 'center' }}>
    {error}
  </Alert>) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RestrictedRoute redirectTo="/" component={<RegistrationPage/>} />} />
          <Route path='/login' element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage/>} />}/>
          <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} />} />
        </Routes>
      </Suspense>
    </Layout>
  );         
}

export default App

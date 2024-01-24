import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { Layout } from 'pages/Layout/Layout';
import { Login } from 'pages/LoginPage';
import { Home } from 'pages/HomePage';
import { PrivateRoute, RestrictedRoute } from "./guards";
import { Signup } from 'pages/SignupPage';
import { Contacts } from 'pages/ContactsPage';


export const App = () => {

  return (
    <div className={css.divApp}>
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='signup' element={
            <RestrictedRoute redirectTo='/contacts' component={<Signup />} />} />
          <Route path='login' element={
            <RestrictedRoute redirectTo='/contacts' component={<Login />} />}/>
          <Route path='contacts' element={
            <PrivateRoute redirectTo='/login' component={<Contacts/>}/>}/>
          
          
        </Route>
      </Routes>


    </div>
  );
};

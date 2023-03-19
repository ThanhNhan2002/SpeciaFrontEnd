// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { 
//   Component, 
// } from 'react';

import { 
  // BrowserRouter, 
  Routes, 
  Route, 
  // useLocation,
} from "react-router-dom";

import Layout from './Layout';


import Login from './auth/login/Login';
import DigitalAssistants from './pages/DigitalAssistants/DigitalAssistants';
import Reports from './pages/Reports/Reports';
import ProtectedRoute from './auth/ProtectedRoute'

import Registration from './auth/registration/Registration'

function App() {


  return (
            <Routes>
              <Route path='/auth/login' element={<Login/>}></Route>
              <Route path='/auth/register' element={<Registration/>}></Route>
              <Route path="/" element={<ProtectedRoute><Layout/></ProtectedRoute>}>
                <Route index element={<DigitalAssistants/>}></Route>
                <Route path='/reports' element={<Reports/>}></Route>
              </Route>
            </Routes>
  );
}

export default App;
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
import ProtectedRoute from './auth/ProtectedRoute'
import Registration from './auth/registration/Registration'
import ReportList from './pages/Reports/ATOReporter/ReportList'
import Reports from './pages/Reports/Reports';
import ATOrequests from './pages/Reports/ATOReporter/ATOrequests';
import DummyResource from './pages/DummyResource';

function App() {


  return (
            <Routes>
              <Route path='/auth/login' element={<Login/>}></Route>
              <Route path='/auth/register' element={<Registration/>}></Route>
              <Route path="/" element={<ProtectedRoute><Layout/></ProtectedRoute>}>
                <Route index element={<DigitalAssistants/>}></Route>
                <Route path='/reports' element={<Reports/>}></Route>
                <Route path='/reports/ATOrequests' element={<ATOrequests/>}></Route>
                <Route path='/reports/ATOrequests/:requestID' element={<ReportList/>}></Route>
                <Route path='/dummyResource' element={<DummyResource/>}></Route>
              </Route>
            </Routes>
  );
}

export default App;

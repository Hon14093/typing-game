import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import PasswordRecoveryPage from './pages/PasswordRecoveryPage';
import LineChart from './Components/functions/test/LineChart';
import { BrowserRouter } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Login",
    element: <LoginPage />,
  },
  {
    path: "Account",
    element: <AccountPage />,
  },
  {
    path: "Password",
    element: <PasswordRecoveryPage />
  },
  {
    path: "Line",
    element: <LineChart />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

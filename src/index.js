import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { AuthProvider } from './components/context/AuthProvider';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
    domain='dev-u1y8vownxrf1p3rb.us.auth0.com'
    clientId='fflbEsPmVnsRtWz5uDQA3xtnRJ9ztElM'
    redirectUri={window.location.origin}
    audience="unique identifier"
    scope='openid profile email'
    >
      <App />
    </Auth0Provider>
    {/* <AuthProvider>
      <App />
    </AuthProvider> */}
  </React.StrictMode>
);


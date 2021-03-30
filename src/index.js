import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// TODO: wrap everything in Auth0
ReactDOM.render(
     <Auth0Provider
        domain="dev-hvej6yca.us.auth0.com"
        clientId="mbOz8rPspP5IcPA2t9zp3furBh0mexAs"
        redirectUri="https://suspicious-kilby-d75d0f.netlify.app"
        
    >
      <App />
    </Auth0Provider>,
  document.getElementById('root')
);

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './login.css';
import LoginButton from './LoginButton';
import LogOutButton from './LogOutButton';
import { withAuth0 } from '@auth0/auth0-react';

class Login extends React.Component {
  render() {
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <LoginButton/>
          {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
          <LogOutButton />
        </Card.Body>
      </Card>
    )
  }
}

export default withAuth0(Login);

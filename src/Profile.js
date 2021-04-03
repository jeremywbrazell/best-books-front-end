import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';


class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    return( 
    <>
    <h1>Hello Captain: {user.email}!</h1>;

    </>
    
    )
  }
}

export default withAuth0(Profile);
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './BestBooks'
class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    return <div>Hello Captain {user.name}</div>;
    <BestBooks />
  }
}

export default withAuth0(Profile);
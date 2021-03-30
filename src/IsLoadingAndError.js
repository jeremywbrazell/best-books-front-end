import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
// import { useAuth0 } from '@auth0/auth0-react';

class IsLoadingAndError extends React.Component {
  render() {
    const{auth0} = this.props.auth0;
    return(
      auth0.isLoading ? 
        <div> Loading...</div>
        :
        auth0.error ?
        <div>Oops... {auth0.error.message}</div>
        :
        this.props.children
    )
  }
}

export default withAuth0(IsLoadingAndError);

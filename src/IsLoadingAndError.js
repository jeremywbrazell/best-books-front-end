import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';


class IsLoadingAndError extends React.Component {

  
  render() {

    return(
      this.props.auth0.isLoading ? 
        <div> Loading...</div>
        :
        this.auth0.error ?
        <div>Oops... {auth0.error.message}</div>
        :
        this.props.children
    )
  }
}

export default withAuth0(IsLoadingAndError);

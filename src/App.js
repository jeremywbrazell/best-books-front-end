import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './profile';
import myFavoriteBooks from './MyFavoriteBooks';
import Login from './Login';



class App extends React.Component {

  render() {
    console.log('app', this.props)
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
              <Switch>
                <Route exact path="/">
                  <myFavoriteBooks />
                  <Login />
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                </Route>
                  <Route path="/profile" exact render = {props => <Profile {...props}/>}/>
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
               
              </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default App;

import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import MyFavoriteBooks from './MyFavoriteBooks';
import Login from './Login';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user: '',
      bookList: [],
      displayModal: false,

    }
  }

  logger = (key, val) =>{
    this.setState({key: val})
  }

  render() {
    console.log('app', this.props.auth0)
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
              <Switch>
                <Route exact path="/">
                  {this.props.auth0.isAuthenticated  
                  ? <MyFavoriteBooks user={this.user} change={this.logger}  /> 
                  : <Login /> }
                </Route>
                  <Route path="/profile" exact > 
                  <Profile />
                  </Route>
               
              </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);

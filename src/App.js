import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import MyFavoriteBooks from './MyFavoriteBooks';
import Login from './Login';
import BookFormModal from './BookFormModal';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bookData: [],
      user: {},
      newBook: {},
      indexOfChanges: -1,
      showModal: false,
      bad: ''
    }
  }
handleModal = (update) => {
  this.setState({user: update})
  this.setState({indexOfChanges: update.books.indexOf(this.state.bad)})
}
handleDelete = (bookToBeDeleted) => {
  console.log(this.state.user);
  const temp = bookToBeDeleted;
  let index = 0;
  const list = this.state.user.books; 
  list.forEach((book, idx) => {
    if(book.name === temp) {
      index = idx;
    }
  })
  this.setState({bad: temp})
  this.setState({indexOfChanges: index})
}
handleBookData = (library) => {
  console.log(library);
  this.setState({user:library})
}
updateLib = (books) => {
  this.setState({bookData: books})
}
  render() {
    console.log('isbi;usbsui;bs', this.props.auth0)
    console.log(this.state);
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? 
              <>
              <MyFavoriteBooks books={this.state.bookData} getBooks={this.handleBookData}/> 
              <BookFormModal email={this.state.user} handleDelete = {this.handleDelete} index = {this.state.indexOfChanges} updateLib = {this.updateLib} />
              </>
              : <Login />}
            </Route>
            <Route path="/profile" exact render={props => <Profile {...props} />} />
          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);

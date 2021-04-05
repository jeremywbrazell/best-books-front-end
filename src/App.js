import React from 'react';
import Header from './Header';
import './App.css'
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
// handleModal = (update) => {
//   if(!this.state.user){this.setState({user: update})}
//   this.setState({indexOfChanges: update.books.indexOf(this.state.bad)})
// }
handleDelete = (bookToBeDeleted) => {
  console.log('delete: ', this.state.user);
  const temp = bookToBeDeleted;
  const list = this.state.user.books; 
  const count = list.reduce((acc, curr, idx)=>{
    if (curr.email===temp){
      acc=idx}
      return acc
  },0)

  
  // let flex={};
  this.setState({bad: temp})
  this.setState({indexOfChanges: count})
}
handleBookData = (library) => {
  console.log("handle book data", library);
  this.flex=library
  this.setState({user:library,  
                  bookData: library.books})
}
updateLib = (books) => {
  this.setState({bookData: books})
}
  render() {

    console.log('book form modal state: ', this.state);
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {!this.props.auth0.isAuthenticated  
              ? <><Login/></>
              : <div className="logged-in">
                <h2>{`Hello ${this.props.auth0.user.name}`}</h2>
                <MyFavoriteBooks  use={this.state.user} books={this.state.bookData} getBooks={this.handleBookData}/> 
              <BookFormModal email={this.state.user.email} handleDelete = {this.handleDelete} 
                              index = {this.state.indexOfChanges} updateLib = {this.updateLib} />
              </div>
               }
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

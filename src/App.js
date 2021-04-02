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
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bookData: [],
      user: '',
      newBook: {},
      indexOfChanges: -1,
      showModal: false,
    }
  }
handleModal =() => {
  this.setState({showModal: true})
}

handleBookData= (newBooks) => {
  this.setState({bookData:newBooks})
}
// handleBooks = async (id) => {
//   // const SERVER = process.env.PORT;
//   await axios.get('http://localhost:3001/books', { params: { email: id } }).then(bookData => {
//       const data = bookData.data[0].books;
//       // this.setState({ books: data })
//       this.setState({bookData: data})
//       console.log('in handleBooks',data);
//   }).catch(error => { console.log('Something went wrong!') });
// }
// componentDidMount = () => {
//   const user = this.props.auth0;
//   {user.isAuthenticated && this.handleBooks(user.user.email)};
//   console.log('mount', this.state.books);
// };
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
              <BookFormModal email={this.user} />
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

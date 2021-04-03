import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './BestBooks';
import axios from 'axios';

class MyFavoriteBooks extends React.Component {

constructor(props){
  super(props);
  this.state={
    bookList:[],
    user:{},
    newBook:{},
    tempIndex: -1,
  }
}

handleBooks = async (euser) => {
  const { user } = this.props.auth0;
  this.setState({user: user})
  console.log('handlebooks user: ', user)
  await axios.get('http://localhost:3001/books', { params: { email: euser } }).then(lib => {
      const data = lib;
      console.log("DATA??: ", data)
      // this.props.change( 'user', data )
      this.setState({user: data})
      console.log("handlebook state setted: ",this.state.user)
  }).catch(error => { console.log('Something went wrong!', error) });
}
//username nonsense
componentDidMount = () => {
  const {user, isAuthenticated} = this.props.auth0;
  isAuthenticated && this.handleBooks(user.email)
}; 

  render() {
    console.log("My Fav Book State: ", this.state)
    return(
      <Jumbotron className='jumboo'>
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>

        <BestBooks data={this.state.bookList} />

      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);

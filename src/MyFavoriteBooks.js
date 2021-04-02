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

handleBooks = async () => {
  const { user } = this.props.auth0;
  await axios.get('http://localhost:3001/books', { params: { email: user.email } }).then(lib => {
      const data = lib.data.books;
      this.props.booker( data )
      console.log("handlebook state setted: ",this.state.bookData)
  }).catch(error => { console.log('Something went wrong!', error) });
}

componentDidMount = () => {
  const user = this.props.auth0;
  this.handleBooks(user.user.email)
}; 
  render() {
    return(
      <Jumbotron className='jumboo'
      >
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>

        <BestBooks data={this.state.bookList} />

      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);

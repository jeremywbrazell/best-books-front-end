import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './BestBooks';
import axios from "axios";



class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      user: {},
      show: false,
    };
  }

  handleBooks = async () => {
    // const SERVER = process.env.PORT;
    console.log('pre-call props, state', this.props.auth0.user.email , this.state)
    await axios
      .get("http://localhost:3001/books", { params: { email: this.props.auth0.user.email } })
      .then((bookData) => {
        const data = bookData.data;
        // this.setState({ books: data })
        this.setState({ books: data.books, user: data, show: true});
        console.log("bestbooks get data: ", data);
        this.props.getBook(data);
        console.log(`after get state:  ${this.state}`)
      })
      .catch((error) => {
        console.log("Something went wrong!", error);
      });
  };

  componentDidMount = () => {
    this.setState({books: this.props.use.books, user: this.props.use})
    const  user = this.props.auth0;
    {user.isAuthenticated && 
        this.handleBooks(user.email)};
    console.log("mount", this.state.user);
  };
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <BestBooks show={this.state.show}  library={this.state.books} user={this.state.user} />
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);

import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel'
// import "https://unsplash.com/photos/RrhhzitYizg"

class BestBooks extends React.Component {
  constructor(props) {
      super(props)
      this.state ={
          books: [],

      }
  }
    handleBooks = async (id) => {
        // const SERVER = process.env.PORT;
        await axios.get('http://localhost:3001/books', { params: { email: id } }).then(bookData => {
            const data = bookData.data[0];
            // this.setState({ books: data })
            console.log(data);
            this.props.handleBook(data)
            this.setState({books: data.books})
            console.log('in handleBooks',data);
        }).catch(error => { console.log('Something went wrong!') });
    }
    componentDidMount = () => {
        const user = this.props.auth0;
        {user.isAuthenticated && this.handleBooks(user.user.email)};
        console.log('mount', this.state.books);
    };
    render() {
        console.log(this.state.books);
   
        return (
                <Carousel>
                    {this.state.books.map((item) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://unsplash.com/photos/RrhhzitYizg"
                            alt=""
                        />
                        {/* <Carousel.Caption as="div"> */}
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        {/* </Carousel.Caption> */}
                    </Carousel.Item>
                    ))}
                </Carousel>
        )

    }
}


export default withAuth0(BestBooks);
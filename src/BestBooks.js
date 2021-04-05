import React from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import Carousel from "react-bootstrap/Carousel";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      user: {},
    };
  }
  handleBooks = async () => {
    // const SERVER = process.env.PORT;
    await axios
      .get("http://localhost:3001/books", { params: { email: this.props.usse.email } })
      .then((bookData) => {
        const data = bookData.data;
        // this.setState({ books: data })
        this.setState({ books: data.books, user: data });
        console.log("bestbooks get data: ", data);
        this.props.handleBook(data);
        console.log(`after get state:  ${this.state}`)
        console.log("in handleBooks", data);
      })
      .catch((error) => {
        console.log("Something went wrong!");
      });
  };
  componentDidMount = () => {
    this.setState({books: this.props.usse.books, user: this.props.usse})
    const [isAuthenticated , user] = this.props.auth0;
    isAuthenticated && 
        this.handleBooks(user.email);
    console.log("mount", this.state.books);
  };

  render() {
    console.log("???????????", this.state);

    return (
      <Carousel>
        {this.state.user[0] !== undefined &&
          this.state.user[0].books.reduce((acc, curr, idx) => {
            return acc=(
              <Carousel.Item key={idx} style={`border-radius: "4px"; border-color: red;`}>
                <h3>{curr.name}</h3>
                <p>{curr.description}</p>
              </Carousel.Item>
            );
          }, [])}
      </Carousel>
    );
  }
}
export default withAuth0(BestBooks);

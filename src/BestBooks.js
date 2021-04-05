import React from "react";

import { withAuth0 } from "@auth0/auth0-react";
import Carousel from "react-bootstrap/Carousel";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      user: {},
      show: false,
    };
  }
//   handleBooks = async () => {
//     // const SERVER = process.env.PORT;
//     console.log('pre-call props, state', this.props.auth0.user.email , this.state)
//     await axios
//       .get("http://localhost:3001/books", { params: { email: this.props.auth0.user.email } })
//       .then((bookData) => {
//         const data = bookData.data;
//         // this.setState({ books: data })
//         this.setState({ books: data.books, user: data });
//         console.log("bestbooks get data: ", data);
//         this.props.handleBook(data);
//         console.log(`after get state:  ${this.state}`)
//       })
//       .catch((error) => {
//         console.log("Something went wrong!", error);
//       });
//   };
  componentDidMount = () => {
    this.setState({books: this.props.user.books, user: this.props.user})
    const  user = this.props.auth0;
    user.isAuthenticated && 
        this.handleBooks(user.email);
    console.log("mount", this.state.user);
  };

  render() {
    console.log("???????????", this.state);

    return (
      <Carousel>
        {this.state.user.books !== undefined &&
          this.state.user.books.reduce((acc, curr, idx) => {
              console.log("in reduce", this.state)
            return acc=(
            //   <Carousel.Item key={idx} style={`border-radius: "4px"; border-color: red;`}>
                  <>
                <h3>{curr.name}</h3>
                <p>{curr.description}</p>
                </>
            //   </Carousel.Item>
            );
          }, [])}
      </Carousel>
    );
  }
}
export default withAuth0(BestBooks);

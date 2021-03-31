
import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel'




class BestBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookData: [],

        }
    }


    handleBooks = async (id) => {
        // const SERVER = process.env.PORT;
        await axios.get('http://localhost:3001/books', { params: { email: id } }).then(bookData => {
            const data = bookData.data;
            this.setState({ bookData: data })
            console.log(data);
        }).catch(error => { console.log('Something went wrong!') });
    }
    componentDidMount = () => {
        const {user} = this.props.auth0;
        console.log(user);
        if (this.props.auth0){this.handleBooks(user.email)};
    };
    render() {
        return (
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}


export default withAuth0(BestBooks);